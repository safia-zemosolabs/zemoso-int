import React from "react";
import theme from "../../../../themes";

const TimeIcon = () => {
  return (
    <svg
      width={theme.spacing(4)}
      height={theme.spacing(4)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99999 17.3332C4.39749 17.3332 0.666656 13.6023 0.666656 8.99984C0.666656 4.39734 4.39749 0.666504 8.99999 0.666504C13.6025 0.666504 17.3333 4.39734 17.3333 8.99984C17.3333 13.6023 13.6025 17.3332 8.99999 17.3332ZM8.99999 15.6665C10.7681 15.6665 12.4638 14.9641 13.714 13.7139C14.9643 12.4636 15.6667 10.7679 15.6667 8.99984C15.6667 7.23173 14.9643 5.53604 13.714 4.28579C12.4638 3.03555 10.7681 2.33317 8.99999 2.33317C7.23188 2.33317 5.53619 3.03555 4.28594 4.28579C3.0357 5.53604 2.33332 7.23173 2.33332 8.99984C2.33332 10.7679 3.0357 12.4636 4.28594 13.7139C5.53619 14.9641 7.23188 15.6665 8.99999 15.6665ZM9.83332 8.99984H13.1667V10.6665H8.16666V4.83317H9.83332V8.99984Z"
        fill="#6D787E"
      />
    </svg>
  );
};

export default TimeIcon;