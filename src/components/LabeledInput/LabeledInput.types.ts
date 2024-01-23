import { HTMLInputTypeAttribute } from "react";

export type LabeledInputProps = {
    inputLabelName: string;
    placeholder?: string;
    inputType?: HTMLInputTypeAttribute;
    onInputChange?: () => void;
    classNames?: string;
};