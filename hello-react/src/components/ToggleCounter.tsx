import React, { type Dispatch, type SetStateAction } from "react";
import MyButton from "./MyButton";

interface ToggleCounterProps {
  setIsCountShown: Dispatch<SetStateAction<boolean>>;
}

const ToggleCounter = ({ setIsCountShown }: ToggleCounterProps) => {
  return (
    <MyButton
      onClick={() => {
        setIsCountShown((prev) => !prev);
      }}>
      Toggle Counter
    </MyButton>
  );
};

export default ToggleCounter;
