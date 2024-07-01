import "./Tracker4.css";
import { API_BASE_URL } from "../../config/urls";
import useApi from "../../services/useApi";
import { useEffect, useState } from "react";
import { TotalCases } from "../../components/tracker1/TotalCases";
import { TotalDeaths } from "../../components/tracker1/TotalDeaths";
import { NewCases } from "../../components/tracker1/NewCases";
import { NewDeaths } from "../../components/tracker1/NewDeaths";
import { TotalRecovered } from "../../components/tracker1/TotalRecovered";
import { TotalActive } from "../../components/tracker1/TotalActive";

const Tracker4 = () => {
  const [countries, setCountries] = useState([]);
  const data = useApi(`${API_BASE_URL}/countries`);
  const [countryInfoTag, setCountryInfoTag] = useState(null);
  const allCountryData = useApi(`${API_BASE_URL}/all`);

  useEffect(() => {
    if (data) {
      const tagsCountries = data
        .sort((a, b) => b.deaths - a.deaths)
        .slice(0, 10);
      setCountries(tagsCountries);
    }
  }, [data]);

  useEffect(() => {
    if (allCountryData) {
      setCountryInfoTag(allCountryData);
    }
  }, [allCountryData]);

  const showCountryData = async (e) => {
    const countryCode = e.target.value;
    const countryData = countries.find(
      (country) => country.countryInfo.iso2 === countryCode
    );
    if (countryData) {
      setCountryInfoTag(countryData);
    }
  };

  if (!allCountryData) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className="flex flex-col font-poppins p-[20px]">
        <h1 className="text-xl border-b border-strongGray pb-2 mb-8 font-bold text-[#262f5a]">
          Covid-19 Country Wise - Tabs
        </h1>
        <div className="flex flex-wrap">
          {countries.map((country) => (
            <button
              key={country.country}
              onClick={showCountryData}
              value={country.countryInfo.iso2}
              className="text-xs py-2.5 px-3 bg-white rounded shadow-lg mr-3.5 mb-3.5 flex items-center font-semibold hover:bg-[#3639AE] hover:text-white transition duration-200"
            >
              <img
                src={country.countryInfo.flag}
                alt={`Flag of ${country.country}`}
                className="w-[1.6vw] h-[1.6vw] rounded-full mr-2"
              />
              {country.country}
            </button>
          ))}
        </div>
        <div
          id="infoCard"
          className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[30px]"
        >
          {countryInfoTag ? (
            <>
              <TotalCases>{countryInfoTag.cases}</TotalCases>
              <TotalDeaths>{countryInfoTag.deaths}</TotalDeaths>
              <TotalRecovered>{countryInfoTag.recovered}</TotalRecovered>
              <TotalActive>{countryInfoTag.active}</TotalActive>
              <NewCases>{countryInfoTag.todayCases}</NewCases>
              <NewDeaths>{countryInfoTag.todayDeaths}</NewDeaths>
            </>
          ) : (
            <p>Cargando datos del país...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Tracker4;
