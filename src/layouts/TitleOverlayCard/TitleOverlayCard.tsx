import React, { FC } from "react";

type TitleOverlayCardProps = {
  text: string;
  backgroundColor?: string;
};

export const TitleOverlayCard: FC<TitleOverlayCardProps> = ({ text, backgroundColor }) => {
  return (
    <div className="opaque-overlay">
      <div className="text-overlay">
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

