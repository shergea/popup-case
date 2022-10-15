import React from "react";
import renderer from "react-test-renderer";
import { FontItem } from "../../../models/font";
import Setting from "../../../models/setting";
import Popup from "../../popup";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Popup
        setting={
          {
            headline: "HeadLine",
            buttonText: "ButtonText",
            description: "Description",
            successMessage: "successMessage",
            font: "Roboto",
          } as Setting
        }
        fonts={
          [
            {
              family: "ABeeZee",
              subsets: ["latin", "latin-ext"],
              version: "v22",
              category: "sans-serif",
              variants: ["regular", "italic"],
            },
            {
              family: "Abel",
              subsets: ["latin"],
              version: "v18",
              category: "sans-serif",
              variants: ["regular"],
            },
          ] as Array<FontItem>
        }
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
