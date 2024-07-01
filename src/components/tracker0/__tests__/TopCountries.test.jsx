import { render, screen } from "@testing-library/react";
import TopCountries from "../TopCountries";
import mockUseApi from "../../../services/useApi";
import { countriesMock } from "./mocks/countries";

jest.mock("../../../services/useApi", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("TopCountries", () => {
  test("show loading", () => {
    mockUseApi.mockReturnValue(null);
    render(<TopCountries />);
    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  test("don't show loading", () => {
    mockUseApi.mockReturnValue([]);
    render(<TopCountries />);
    expect(screen.queryByText("Loading...")).toBeFalsy();
  });

  test("render country cards", () => {
    mockUseApi.mockReturnValue(countriesMock);
    render(<TopCountries />);
    expect(screen.getByRole("list").children).toHaveLength(10);
  });

  test("render only 5 country cards ", () => {
    mockUseApi.mockReturnValue(countriesMock.slice(0, 5));
    render(<TopCountries />);
    expect(screen.getByRole("list").children).toHaveLength(5);
  });
});
