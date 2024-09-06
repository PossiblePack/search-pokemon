import { TFontSize } from "@/types/pokemonInfo";
import React, { ReactNode } from "react";

type TextInfoProps = {
  fontSize?: TFontSize;
  label: string;
  children: ReactNode;
};

const TextInfo: React.FC<TextInfoProps> = ({ label, children, fontSize }) => {
  const size = fontSize ? `text-${fontSize}` : "text-lg";
  return (
    <div>
      <p className={`text-md font-bold ${size}`}>{label}</p>
      {children}
    </div>
  );
};

export default TextInfo;
