import React from "react";
import renderer from "react-test-renderer";
import Tracker4 from "../Tracker4";

it("performs snapshot testing", () => {
  const tree = renderer.create(<Tracker4 />).toJSON();
  expect(tree).toMatchSnapshot();
});
