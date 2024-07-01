import Card, { CardTitle, CardData, CardImage } from "../card/Card";

export const TotalConfirmed = ({ children }) => {
  return (
    <smallCard>
      <CardImage src={"/assets/icons/covid-orange.svg"} />
      <CardTitle>Total Confirmed</CardTitle>
      <CardData className="text-navyBlue">{children}</CardData>
    </smallCard>
  );
};
