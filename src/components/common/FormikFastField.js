import { getIn, FastField } from "formik";
import React from "react";

const FormikFastField = React.memo(({ ...props }) => {
  const shouldComponentUpdate = (nextProps, currentProps) => {
    return (
      nextProps.name !== currentProps.name ||
      nextProps.required !== currentProps.required ||
      nextProps.disabled !== currentProps.disabled ||
      nextProps.readOnly !== currentProps.readOnly ||
      nextProps.formik.isSubmitting !== currentProps.formik.isSubmitting ||
      Object.keys(nextProps).length !== Object.keys(currentProps).length ||
      getIn(nextProps.formik.values, currentProps.name) !==
        getIn(currentProps.formik.values, currentProps.name) ||
      getIn(nextProps.formik.errors, currentProps.name) !==
        getIn(currentProps.formik.errors, currentProps.name) ||
      getIn(nextProps.formik.touched, currentProps.name) !==
        getIn(currentProps.formik.touched, currentProps.name)
    );
  };

  return (
    <>
      <FastField shouldUpdate={shouldComponentUpdate} {...props} />
    </>
  );
});

export { FormikFastField };
