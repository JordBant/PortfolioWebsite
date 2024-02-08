import { HTMLInputTypeAttribute } from "react";

export type LabeledInputProps = {
    inputLabelName: string;
    placeholder?: string;
    inputType?: HTMLInputTypeAttribute;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    classNames?: string;
};