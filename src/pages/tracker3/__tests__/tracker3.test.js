import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Tracker3 from "../Tracker3";
import useApi from "../../../services/useApi";

jest.mock("../../../services/useApi");

describe("Tracker3 Component", () => {
  it("renders loading state initially", () => {
    useApi.mockReturnValue(null); // Ensure the initial state is loading

    render(<Tracker3 />);

    expect(screen.getByText(/Cargando .../i)).toBeInTheDocument();
  });

  it("renders data correctly when data is available", async () => {
    const mockData = [
      {
        country: "Test Country",
        countryInfo: { iso2: "TC" },
        cases: 1000,
        todayCases: 50,
        deaths: 20,
        todayDeaths: 1,
        recovered: 800,
        active: 180,
        critical: 5,
        tests: 10000,
      },
    ];

    useApi.mockReturnValue(mockData);

    render(<Tracker3 />);

    await waitFor(() =>
      expect(screen.getByText(/Test Country/i)).toBeInTheDocument()
    );

    // Get all columns in the table
    const columns = screen.getAllByRole("columnheader");

    // Get the first row in each column
    const topCasesColumn = within(columns[0].closest("table")).getAllByRole(
      "cell"
    )[0];
    const topTodayCasesColumn = within(
      columns[1].closest("table")
    ).getAllByRole("cell")[0];
    const topDeathsColumn = within(columns[2].closest("table")).getAllByRole(
      "cell"
    )[0];
    const topTodayDeathsColumn = within(
      columns[3].closest("table")
    ).getAllByRole("cell")[0];
    const topActiveColumn = within(columns[4].closest("table")).getAllByRole(
      "cell"
    )[0];
    const topRecoveredColumn = within(columns[5].closest("table")).getAllByRole(
      "cell"
    )[0];

    // Check values within each column
    expect(
      within(topCasesColumn).getByText(/Test Country/i)
    ).toBeInTheDocument();
    expect(within(topCasesColumn).getByText("1000")).toBeInTheDocument();

    expect(
      within(topTodayCasesColumn).getByText(/Test Country/i)
    ).toBeInTheDocument();
    expect(within(topTodayCasesColumn).getByText("50")).toBeInTheDocument();

    expect(
      within(topDeathsColumn).getByText(/Test Country/i)
    ).toBeInTheDocument();
    expect(within(topDeathsColumn).getByText("20")).toBeInTheDocument();

    expect(
      within(topTodayDeathsColumn).getByText(/Test Country/i)
    ).toBeInTheDocument();
    expect(within(topTodayDeathsColumn).getByText("1")).toBeInTheDocument();

    expect(
      within(topActiveColumn).getByText(/Test Country/i)
    ).toBeInTheDocument();
    expect(within(topActiveColumn).getByText("180")).toBeInTheDocument();

    expect(
      within(topRecoveredColumn).getByText(/Test Country/i)
    ).toBeInTheDocument();
    expect(within(topRecoveredColumn).getByText("800")).toBeInTheDocument();
  });
});
