import React from "react";
import renderer from "react-test-renderer";
import GreenButton from "../../../popup/components/greenButton";

it("renders correctly", () => {
  const tree = renderer
    .create(<GreenButton text="Green Button Text" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
