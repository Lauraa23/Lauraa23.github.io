import { render, screen, within } from "@testing-library/react";
import GeneralInformation from "../GeneralInformation";
import mockUseApi from "../../../services/useApi";

jest.mock("../../../services/useApi", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("GeneralInfomation", () => {
  test("show loading", () => {
    mockUseApi.mockReturnValue(null);
    render(<GeneralInformation />);
    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  test("don't show loading", () => {
    mockUseApi.mockReturnValue({});
    render(<GeneralInformation />);
    expect(screen.queryByText("Loading...")).toBeFalsy();
  });

  test("render empty cards", () => {
    mockUseApi.mockReturnValue({});
    render(<GeneralInformation />);
    expect(screen.getByRole("list").children).toHaveLength(4);

    const listItems = screen.getAllByRole("listitem");
    expect(within(listItems[0]).getByRole("heading").textContent).toBe(
      "Total Case"
    );
    expect(within(listItems[1]).getByRole("heading").textContent).toBe(
      "Active Case"
    );
    expect(within(listItems[2]).getByRole("heading").textContent).toBe(
      "Recovered Case"
    );
    expect(within(listItems[3]).getByRole("heading").textContent).toBe(
      "Deaths Case"
    );
  });

  test("render information cards", () => {
    mockUseApi.mockReturnValue({
      cases: 123,
      todayCases: 2,
      deaths: 12,
      todayDeaths: 1,
      recovered: 100,
      todayRecovered: 5,
      active: 23,
    });
    render(<GeneralInformation />);
    const listItems = screen.getAllByRole("listitem");
    expect(within(listItems[0]).getByText("123")).toBeTruthy();
    expect(within(listItems[1]).getByText("23")).toBeTruthy();
    expect(within(listItems[2]).getByText("100")).toBeTruthy();
    expect(within(listItems[3]).getByText("12")).toBeTruthy();
  });

  test("render information cards banner", () => {
    mockUseApi.mockReturnValue({
      cases: 123,
      todayCases: 2,
      deaths: 12,
      todayDeaths: 1,
      recovered: 100,
      todayRecovered: 5,
      active: 23,
    });
    render(<GeneralInformation />);
    const listItems = screen.getAllByRole("listitem");
    expect(within(listItems[0]).getByTestId("banner").textContent).toBe("+2");
    expect(within(listItems[1]).queryByTestId("banner")).toBeFalsy();
    expect(within(listItems[2]).getByTestId("banner").textContent).toBe("+5");
    expect(within(listItems[3]).getByTestId("banner").textContent).toBe("+1");
  });
});
