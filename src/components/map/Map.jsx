import * as React from "react";
import { useState } from "react";
import WorldMap from "react-svg-worldmap";
import useApi from "../../services/useApi";
import { API_BASE_URL } from "../../config/urls";
import "./map.css";

export default function Map() {
  const data = useApi(`${API_BASE_URL}/countries`);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  if (!data) {
    return <p>Cargando ...</p>;
  }

  const filterCountries = data.filter((country) => {
    return country.countryInfo.iso2;
  });

  const countries = filterCountries.map((country) => ({
    country: country.countryInfo.iso2,
    value: country.cases,
    countryName: country.country,
  }));

  const onHoverCountry = (event, countryCode) => {
    const country = countries.find((c) => c.country === countryCode);
    if (country) {
      setHoveredCountry(country.country);
      setHoverPosition({ x: event.pageX, y: event.pageY });
    }
  };

  const onLeaveCountry = () => {
    setHoveredCountry(null);
  };

  return (
    <div className="map-container w-[100%]" id="map-container">
      <WorldMap
        color="blue"
        size="lg"
        title="Total Cases by Country"
        data={countries}
        onHover={(event, countryCode) => {
          onHoverCountry(event, countryCode);
        }}
        onLeave={onLeaveCountry}
      />
      {hoveredCountry && (
        <div
          className="hovered-country"
          style={{
            top: `${hoverPosition.y + 10}px`,
            left: `${hoverPosition.x + 10}px`,
          }}
        >
          {hoveredCountry}
        </div>
      )}
    </div>
  );
}
