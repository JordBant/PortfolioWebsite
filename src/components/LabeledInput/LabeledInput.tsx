import React, { FC } from "react";
import { LabeledInputProps } from "./LabeledInput.types";
import "./LabeledInput.scss";

export const LabeledInput: FC<LabeledInputProps> = ({
  inputType = "text",
  inputLabelName,
  onInputChange = () => {},
  placeholder,
  classNames,
}) => {
  return (
    <div className={`form-input-container ${classNames}`}>
      <label className="form-label" htmlFor={`${inputLabelName.toLocaleLowerCase()}`}>
        {inputLabelName}
      </label>
      <input
        id={inputLabelName.toLocaleLowerCase()}
        className="form-input"
        placeholder={placeholder}
        onChange={(e) => onInputChange(e)}
        type={inputType}
      />
    </div>
  );
};

