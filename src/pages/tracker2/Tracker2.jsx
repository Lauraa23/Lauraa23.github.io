import { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "./tracker2.css";
import { API_BASE_URL } from "../../config/urls";
import useApi from "../../services/useApi";

const Tracker2 = () => {
  const data = useApi(`${API_BASE_URL}/countries`);

  useEffect(() => {
    if (data && data.length > 0) {
      const tableId = "#CountryStatsDataTable";

      if ($.fn.DataTable.isDataTable(tableId)) {
        $(tableId).DataTable().destroy();
      }

      $(tableId).DataTable({
        paging: true,
        pageLength: 10,
        language: {
          lengthMenu: "Show _MENU_ entries",
          info: "",
          paginate: {
            first: "Previous",
            last: "Next",
          },
        },
        infoCallback: function (settings, start, end, max, total, pre) {
          return `Showing ${start} to ${end} of ${total} entries`;
        },
      });
    }
  }, [data]);

  if (!data) {
    return <p>Cargando ...</p>;
  }

  return (
    <div
      className="flex-1 flex flex-col m-auto p-7 bg-light h-[100vh] font-poppins overflow-auto"
      id="table"
      tabIndex="3"
    >
      <div className="bg-white rounded shadow-[0_15px_30px_0_rgba(20,50,90,0.05)] mb-[30px] py-[15px] border-b-[rgba(0,0,0,0.12)] border-b border-solid">
        <h1 className="font-semibold text-[22px] mb-0 text-[#121158] border-b border-[#ccc] py-[10px] px-[20px]">
          Ajax Data Table - Covid-19 Country Wise State
        </h1>
        <div className="px-5 py-[15px]">
          <div
            id="CountryStatsDataTable_wrapper"
            className="relative clear-both overflow-scroll"
          >
            <div></div>
            <table
              id="CountryStatsDataTable"
              className="h-[70%]"
              style={{ width: "100%" }}
            >
              <thead className="text-navyBlue hover:cursor-pointer">
                <tr>
                  <th>Flag</th>
                  <th>Country</th>
                  <th>Cases</th>
                  <th>New Cases</th>
                  <th>Deaths</th>
                  <th>New Deaths</th>
                  <th>Recovered</th>
                  <th>Active</th>
                  <th>Critical</th>
                  <th>Tested</th>
                </tr>
              </thead>
              <tbody className="text-textBlue hover:cursor-pointer">
                {data.map((country) => (
                  <tr key={country.country}>
                    <td>
                      {country.countryInfo && country.countryInfo.iso2 ? (
                        <img
                          src={`https://disease.sh/assets/img/flags/${country.countryInfo.iso2.toLowerCase()}.png`}
                          className="w-[30px]"
                        />
                      ) : (
                        ""
                      )}
                    </td>
                    <td>{country.country}</td>
                    <td>{country.cases}</td>
                    <td>{country.todayCases}</td>
                    <td>{country.deaths}</td>
                    <td>{country.todayDeaths}</td>
                    <td>{country.recovered}</td>
                    <td>{country.active}</td>
                    <td>{country.critical}</td>
                    <td>{country.tests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker2;
