import React, { FC } from "react";
import { PageTitle } from "../../store/constants.type";
import "./SideTitlePage.scss";

type SideTitlePageProps = {
  pageId?: string;
  pageTitle: PageTitle;
  classNames?: string;
  children: React.ReactElement;
};

export const SideTitlePage: FC<SideTitlePageProps> = ({ pageTitle, classNames, children, pageId }) => {
  return (
    <section id={`#${pageId?.toLowerCase()}`} className={`page-side-title-wrapper ${classNames}`}>
      <div className="page-side-container">{children}</div>
      <h1 className="page-side-title">{`<${pageTitle}/>`}</h1>
    </section>
  );
};

