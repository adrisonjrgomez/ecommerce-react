import React from "react";
import "./form-int.styles.scss";

const FormInput = (handleChange, label, ...otherProps) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? <label className={`${othersProps.value.length ? 'shrink' : ''}`}>{label}</label> : null}
  </div>
);

export default FormInput;
