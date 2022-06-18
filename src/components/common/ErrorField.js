import React from "react";

const ErrorField = ({ errorMessage }) => {
  return (
    <div className="mb-3">
      <input type="hidden" className="form-control is-invalid" />
      {errorMessage && (
        <div class="invalid-feedback" style={{ textAlign: "left" }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default ErrorField;
