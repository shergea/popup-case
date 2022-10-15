import { Formik } from "formik";
import renderer from "react-test-renderer";
import { FontItem } from "../../../models/font";
import CustomSelect from "../../formElements/customSelect";

it("renders correctly", () => {
  const fieldName = "firstName";
  const labelName = "First Name";
  const fonts = [
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
  ] as Array<FontItem>;

  const tree = renderer
    .create(
      <Formik
        validate={(values: any) => {
          const errors = {} as any;

          if (!values?.firstName) {
            errors.firstName = "Required.";
          }

          return errors;
        }}
        initialValues={{}}
        onSubmit={() => {}}
      >
        <CustomSelect
          id={fieldName}
          name={fieldName}
          label={labelName}
          placeholder={labelName}
          data={fonts.map((x, index) => ({
            label: x.family,
            value: `'${x.family}', ${x.category}`,
            key: index,
          }))}
        />
      </Formik>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
