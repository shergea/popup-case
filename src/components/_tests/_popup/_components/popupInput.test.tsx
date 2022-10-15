import { Formik } from "formik";
import renderer from "react-test-renderer";
import PopupInput from "../../../popup/components/popupInput";

it("renders correctly", () => {
  const fieldName = "firstName";
  const labelName = "First Name";
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
        <PopupInput
          type="text"
          id={fieldName}
          name={fieldName}
          placeholder={labelName}
        />
      </Formik>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
