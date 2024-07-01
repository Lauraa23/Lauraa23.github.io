const TopCountry = ({ country }) => {
  return (
    <li className="mb-3 p-3 block rounded shadow-md border-1 border-whisper border-solid hover:scale-105">
      <img
        className="w-10 rounded align-middle inline-block"
        src={country.countryInfo.flag}
        alt={`Flag from ${country.country}`}
      />
      <span className="text-xs font-light ml-3 text-stronGray">
        {country.country}
      </span>
      <h6 className="float-right ml-2.5 leading-9 text-navyBlue text-sm font-semibold">
        {country.deaths}
      </h6>
    </li>
  );
};

export default TopCountry;
