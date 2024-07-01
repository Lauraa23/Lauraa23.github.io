import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TrackerZero from "../TrackerZero";

jest.mock("../TopCountries", () => ({
  __esModule: true,
  default: () => <p>TopCountries</p>,
}));
jest.mock("../GeneralInformation", () => ({
  __esModule: true,
  default: () => <p>GeneralInformation</p>,
}));

describe("TrackerZero", () => {
  test("renders", () => {
    render(<TrackerZero />);

    expect(screen.getByText("TopCountries")).toBeTruthy();
  });
});
