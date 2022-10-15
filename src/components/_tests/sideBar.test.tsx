import React from "react";
import renderer from "react-test-renderer";
import { FontItem } from "../../models/font";
import Setting from "../../models/setting";
import Sidebar from "../sideBar";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Sidebar
        onFormChange={() => {}}
        data={
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
