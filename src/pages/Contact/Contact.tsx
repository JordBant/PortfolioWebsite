import { FC, useState } from "react";
import { SideTitlePage } from "../../layouts/SideTitlePage/SideTitlePage";
import { LabeledInput } from "../../components/LabeledInput";
import "./Contact.scss";
import { LabeledInputProps } from "../../components/LabeledInput/LabeledInput.types";

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
    <SideTitlePage
      pageId="contact"
      pageTitle="Contact"
      classNames="contact-page-container"
      containerClassNames="contact-form-container"
    >
      <form className="contact-form">
        <section className="input-container">
          <LabeledInput
            cssStyles={{ marginRight: "59px" }}
            inputLabelName={"Name"}
            onInputChange={(e) => changeFormValues({ name: e.target.value })}
          />
          <LabeledInput
            inputLabelName={"Affiliation / Company"}
            onInputChange={(e) => changeFormValues({ affiliation: e.target.value })}
          />
        </section>
        <LabeledInput
          cssStyles={{ margin: "50px 0 0" }}
          inputLabelName={"Subject"}
          onInputChange={(e) => changeFormValues({ subject: e.target.value })}
        />
        <LabeledInput
          cssStyles={{ margin: "50px 0 0" }}
          inputLabelName={"Message"}
          inputType="textarea"
          onInputChange={(e) => changeFormValues({ message: e.target.value })}
        />
        <button
          className="form-submit-btn"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `mailto:jaybdev25@gmail.com`; /**it is window.location theat opens mail client */
            // `mailto:jaybdev25@gmail.com?Subject=${encodeURI(formValues.subject)}${encodeURI(
            //   `( ${formValues.name} | `,
            // )}${encodeURI(`${formValues.affiliation} )`)}&Body=${encodeURI(formValues.message)}`,
          }}
        >
          Submit Message via Email
        </button>
      </form>
    </SideTitlePage>
  );
};

