import React from "react";
import theme from "../../../../themes";

export interface AddProps {
  color: string;
}

const Add = (props: AddProps) => {
  return (
    <svg
      width={theme.spacing(4)}
      height={theme.spacing(4)}
      viewBox="0 0 15 14"
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 6V0H8.5V6H14.5V8H8.5V14H6.5V8H0.5V6H6.5Z"
        fill={props.color}
      />
    </svg>
  );
};

export default Add;
