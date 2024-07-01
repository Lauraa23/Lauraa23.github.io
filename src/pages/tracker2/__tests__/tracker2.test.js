import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Tracker2 from "../Tracker2";
import useApi from "../../../services/useApi";

jest.mock("../../../services/useApi");

describe("Tracker2 Component", () => {
  it("renders loading state initially", () => {

    render(<Tracker2 />);

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

    render(<Tracker2 />);

    await waitFor(() =>
      expect(screen.getByText(/Test Country/i)).toBeInTheDocument()
    );

    const row = screen.getByText(/Test Country/i).closest("tr");
    expect(within(row).getByText("1000")).toBeInTheDocument(); 
    expect(within(row).getByText("50")).toBeInTheDocument(); 
    expect(within(row).getByText("20")).toBeInTheDocument(); 
    expect(within(row).getByText("1")).toBeInTheDocument();
    expect(within(row).getByText("800")).toBeInTheDocument(); 
    expect(within(row).getByText("180")).toBeInTheDocument(); 
    expect(within(row).getByText("5")).toBeInTheDocument(); 
    expect(within(row).getByText("10000")).toBeInTheDocument(); 
  });
});