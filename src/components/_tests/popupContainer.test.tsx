import React from "react";
import renderer from "react-test-renderer";
import PopupContainer from "../popupContainer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <PopupContainer>
        <div>Popup children</div>
      </PopupContainer>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
