import Card, { CardTitle, CardData, CardImage } from "../card/Card";

export const TotalRecovered = ({ children }) => {
  return (
    <Card>
      <CardImage src={"/assets/icons/covid-green.svg"} />
      <CardTitle>Total Recovered</CardTitle>
      <CardData className="text-brightGreen">{children}</CardData>
    </Card>
  );
};
