import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TrackerOne from "../../tracker1/TrackerOne";
import useApi from "../../../services/useApi";

jest.mock("../../../services/useApi");

const mockAllData = {
  cases: 1000,
  deaths: 50,
  recovered: 900,
  active: 50,
  todayCases: 10,
  todayDeaths: 1,
};

const mockCountriesData = [
  {
    country: "Country A",
    countryInfo: { iso2: "CA" },
    cases: 500,
    deaths: 25,
    recovered: 450,
    active: 25,
    todayCases: 5,
    todayDeaths: 0,
  },
  {
    country: "Country B",
    countryInfo: { iso2: "CB" },
    cases: 500,
    deaths: 25,
    recovered: 450,
    active: 25,
    todayCases: 5,
    todayDeaths: 0,
  },
];

describe("TrackerOne", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useApi.mockImplementation((url) => {
      if (url.includes("/all")) {
        return mockAllData;
      } else if (url.includes("/countries")) {
        return mockCountriesData;
      } else {
        return null;
      }
    });
  });

  test("renders data correctly", () => {
    render(<TrackerOne />);

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
    expect(screen.getByText("Country A")).toBeInTheDocument();
    expect(screen.getByText("Country B")).toBeInTheDocument();

    const totalCasesElements = screen.getAllByText("1000");
    expect(totalCasesElements.length).toBeGreaterThan(0);

    const totalDeathsElements = screen.getAllByText("50");
    expect(totalDeathsElements.length).toBeGreaterThan(0);

    const totalRecoveredElements = screen.getAllByText("900");
    expect(totalRecoveredElements.length).toBeGreaterThan(0);

    const totalActiveElements = screen.getAllByText("50");
    expect(totalActiveElements.length).toBeGreaterThan(0);

    const newCasesElements = screen.getAllByText("10");
    expect(newCasesElements.length).toBeGreaterThan(0);

    const newDeathsElements = screen.getAllByText("1");
    expect(newDeathsElements.length).toBeGreaterThan(0);
  });

  test("updates country data on select change", () => {
    render(<TrackerOne />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "CA" },
    });

    const countryCasesElements = screen.getAllByText("500");
    expect(countryCasesElements.length).toBeGreaterThan(0);

    const countryDeathsElements = screen.getAllByText("25");
    expect(countryDeathsElements.length).toBeGreaterThan(0);

    const countryRecoveredElements = screen.getAllByText("450");
    expect(countryRecoveredElements.length).toBeGreaterThan(0);

    const countryActiveElements = screen.getAllByText("25");
    expect(countryActiveElements.length).toBeGreaterThan(0);

    const countryNewCasesElements = screen.getAllByText("5");
    expect(countryNewCasesElements.length).toBeGreaterThan(0);

    const countryNewDeathsElements = screen.getAllByText("0");
    expect(countryNewDeathsElements.length).toBeGreaterThan(0);
  });
});
