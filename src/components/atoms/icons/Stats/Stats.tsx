import React from "react";
import theme from "../../../../themes";

const Stats = () => {
  return (
    <svg
      width={theme.spacing(4)}
      height={theme.spacing(4)}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 0V16H18V18H0V0H2ZM17.293 3.293L18.707 4.707L13 10.414L10 7.415L5.707 11.707L4.293 10.293L10 4.586L13 7.585L17.293 3.293Z"
        fill="#042330"
      />
    </svg>
  );
};

export default Stats;
