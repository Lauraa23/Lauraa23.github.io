import useApi from "../../services/useApi.jsx";
import { API_BASE_URL } from "../../config/urls.js";
import InformationCard from "./InformationCard.jsx";

const GeneralInformation = () => {
  const data = useApi(`${API_BASE_URL}/all`);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2 className="font-bold text-darkBlue text-2xl my-2 leading-tight">
        COVID-19 Tracker
      </h2>
      <ul className="list-none">
        <InformationCard
          title={"Total Case"}
          cases={data.cases}
          todayCases={data.todayCases}
          variant="total-case"
        />

        <InformationCard
          title={"Active Case"}
          cases={data.active}
          variant="active-case"
        />

        <InformationCard
          title={"Recovered Case"}
          cases={data.recovered}
          todayCases={data.todayRecovered}
          variant="recovered-case"
        />

        <InformationCard
          title={"Deaths Case"}
          cases={data.deaths}
          todayCases={data.todayDeaths}
          variant="death-case"
        />
      </ul>
    </>
  );
};

export default GeneralInformation;
