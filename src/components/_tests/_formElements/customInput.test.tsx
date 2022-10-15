import { Formik } from "formik";
import renderer from "react-test-renderer";
import CustomInput from "../../formElements/customInput";

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
        <CustomInput
          id={fieldName}
          name={fieldName}
          label={labelName}
          placeholder={labelName}
        />
      </Formik>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
