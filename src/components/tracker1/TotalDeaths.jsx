import Card, { CardTitle, CardData, CardImage } from "../card/Card";

export const TotalDeaths = ({ children }) => {
  return (
    <Card>
      <CardImage src={"/assets/icons/covid-red.svg"} />
      <CardTitle>Total Deaths</CardTitle>
      <CardData className="text-brightRed">{children}</CardData>
    </Card>
  );
};
