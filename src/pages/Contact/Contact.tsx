import { FC, useState } from "react";
import { SideTitlePage } from "../../layouts/SideTitlePage/SideTitlePage";
import { LabeledInput } from "../../components/LabeledInput";
import "./Contact.scss";

type FormBody = {
  name: string;
  affiliation: string;
  subject: string;
  message: string;
};

export const Contact: FC = () => {
  const [formValues, setFormValues] = useState<FormBody>({} as FormBody);
  const DEFAULT_FORM_VALUES: FormBody = {
    name: "",
    subject: "",
    message: "",
    affiliation: "",
  };
  const changeFormValues = (input: Partial<FormBody>, defaultFormValues: FormBody = DEFAULT_FORM_VALUES) => {
    setFormValues({ ...defaultFormValues, ...input });
  };

  return (
    <SideTitlePage pageId="contact" pageTitle="Contact" classNames="contact-page-container">
      <section className="contact-form-container">
        <form className="contact-form">
          <div className="input-container">
            <LabeledInput
              inputLabelName={"Name"}
              onInputChange={(e) => changeFormValues({ name: e.target.value })}
            />
            <LabeledInput
              inputLabelName={"Affiliation / Company"}
              onInputChange={(e) => changeFormValues({ affiliation: e.target.value })}
            />
          </div>
          <LabeledInput
            inputLabelName={"Subject"}
            onInputChange={(e) => changeFormValues({ subject: e.target.value })}
          />
          <LabeledInput
            inputLabelName={"Message"}
            onInputChange={(e) => changeFormValues({ message: e.target.value })}
          />
          <button
            className="form-submit-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `mailto:jaybdev25@gmail.com`;
              // `mailto:jaybdev25@gmail.com?Subject=${encodeURI(formValues.subject)}${encodeURI(
              //   `( ${formValues.name} | `,
              // )}${encodeURI(`${formValues.affiliation} )`)}&Body=${encodeURI(formValues.message)}`,
            }}
          >
            Submit Message via Email
          </button>
        </form>
      </section>
    </SideTitlePage>
  );
};

