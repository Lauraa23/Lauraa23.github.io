import Card, { CardTitle, CardData, CardImage } from "../card/Card";

export const TotalActive = ({ children }) => {
  return (
    <Card>
      <CardImage src={"/assets/icons/covid-blue.svg"} />
      <CardTitle>Total Active</CardTitle>
      <CardData className="text-electricBlue">{children}</CardData>
    </Card>
  );
};
