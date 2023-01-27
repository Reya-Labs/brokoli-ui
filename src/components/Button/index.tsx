import React from "react";

export type ButtonProps = {

}
export const Button: React.FunctionComponent<ButtonProps> = ({ children }) => {
  return (
    <button
    >
      {children}
    </button>
  );
};
