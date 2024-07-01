import Card, { CardTitle, CardData, CardImage } from "../card/Card";

export const TotalCases = ({ children }) => {
  return (
    <Card>
      <CardImage src={"/assets/icons/covid-defult.svg"} />
      <CardTitle>Total Cases</CardTitle>
      <CardData className="text-primary">{children}</CardData>
    </Card>
  );
};
