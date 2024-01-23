import { FC } from "react";
import { SideTitlePage } from "../../layouts/SideTitlePage/SideTitlePage";
import { LabeledInput } from "../../components/LabeledInput";
import "./Contact.scss";

export const Contact: FC = () => {
  return (
    <SideTitlePage pageId="contact" pageTitle="Contact" classNames="contact-page-container">
      <section className="contact-form-container">
        <form className="contact-form">
          <div className="input-container">
            <LabeledInput inputLabelName={"Name"} />
            <LabeledInput inputLabelName={"Affiliation / Company"} />
          </div>
          <LabeledInput inputLabelName={"Subject"} />
          <LabeledInput inputLabelName={"Message"} />
          <button className="form-submit-btn">Send Message</button>
          <button className="form-submit-btn">Send via Email</button>
        </form>
      </section>
    </SideTitlePage>
  );
};

