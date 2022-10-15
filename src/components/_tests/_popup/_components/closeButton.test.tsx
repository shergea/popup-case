import React from "react";
import renderer from "react-test-renderer";
import CloseButton from "../../../popup/components/closeButton";

it("renders correctly", () => {
  const tree = renderer.create(<CloseButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
