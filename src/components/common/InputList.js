import { getIn } from "formik";
import React, { useMemo } from "react";

const getFieldCSSClasses = (touched, errors) => {
  const classes = ["form-control"];

  if (touched && errors) {
    classes.push("is-invalid");
  }

  return classes.join(" ");
};

const Input = React.memo(
  ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    label,
    id,
    withFeedbackLabel = true,
    customFeedbackLabel,
    type = "text",
    validator,
    className,
    ...props
  }) => {
    const { onChange, rest } = useMemo(() => {
      const { onChange, ...rest } = field;
      return { onChange, rest };
    }, [field]);

    const { fieldError, fieldTouched } = useMemo(() => {
      return {
        fieldError: getIn(errors, field.name),
        fieldTouched: getIn(touched, field.name),
      };
    }, [field, errors, touched]);

    const classes = useMemo(() => {
      return className
        ? `${getFieldCSSClasses(fieldTouched, fieldError)} ${className}`
        : getFieldCSSClasses(fieldTouched, fieldError);
    }, [className, fieldError, fieldTouched]);

    const handleChange = (e) => {
      if (validator) {
        validator({ e, onChange });
      } else {
        onChange(e);
      }
    };

    return (
      <>
        <input
          id={id}
          type={type}
          className={classes}
          onChange={handleChange}
          {...rest}
          {...props}
        />
        {label && <label htmlFor={id}>{label}</label>}
        {fieldError && <div class="invalid-feedback" style={{ textAlign: 'left' }}>{fieldError}</div>}
      </>
    );
  }
);

export { Input };
