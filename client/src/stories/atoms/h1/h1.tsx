import React from "react";

interface H1Props {
  contents: string;
}

export const H1 = ({ contents }: H1Props) => {
  return <h1 className="text-2xl">{contents}</h1>;
};
