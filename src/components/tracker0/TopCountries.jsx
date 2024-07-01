import useApi from "../../services/useApi.jsx";
import { API_BASE_URL } from "../../config/urls.js";
import TopCountry from "./TopCountry.jsx";

const TopCountries = () => {
  const topCountriesData = useApi(`${API_BASE_URL}/countries?sort=deaths`);

  if (!topCountriesData) {
    return <p>Loading...</p>;
  }

  const topCountries = topCountriesData.slice(0, 10).map((country) => {
    return <TopCountry key={country.country} country={country} />;
  });

  return (
    <>
      <h4 className="mt-5 mb-4 font-semibold">Top 10 Country</h4>
      <ul className="list-none">{topCountries}</ul>
    </>
  );
};

export default TopCountries;
