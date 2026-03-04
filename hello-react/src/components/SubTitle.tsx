import React from "react";

interface SubtitleProps {
  subTitle: string;
}

const SubTitle = ({ subTitle }: SubtitleProps) => {
  return <p className="font-light text-sm">{subTitle}</p>;
};

export default SubTitle;
