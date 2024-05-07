import { FC, useEffect, useState } from "react";
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
  const DEFAULT_FORM_VALUES: FormBody = {
    name: "",
    subject: "",
    message: "",
    affiliation: "",
  };

  const [formValues, setFormValues] = useState<FormBody>(DEFAULT_FORM_VALUES);
  const changeFormValues = (input: Partial<FormBody>, defaultFormValues: FormBody = formValues) => {
    setFormValues({ ...defaultFormValues, ...input });
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

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
            /**it is window.location theat opens mail client */
            window.location.href = `
            mailto:jaybdev25@gmail.com?body=${formValues.message}&subject=${encodeURI(formValues.subject ?? "")}${encodeURI(` | ` + formValues.name ?? "")}${encodeURI(` from ` + formValues.affiliation ?? "")}`;
          }}
        >
          Submit Message via Email
        </button>
      </form>
    </SideTitlePage>
  );
};

