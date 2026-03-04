import React, { useState } from "react";
import MyButton from "./MyButton";

interface CounterProps {
  startCount: number;
  isCountShown: boolean;
}

interface Student {
  fName: string;
  lName: string;
  age: number;
}

const Counter = ({ startCount, isCountShown }: CounterProps) => {
  //   const counter = 0;

  //   State hook
  const [count, setCount] = useState(startCount);
  const [student, setStudent] = useState<Student>({
    fName: "",
    lName: "",
    age: 0,
  });

  //   TODO: Nummers in favorieten steken en tonen op het scherm in aparte component

  return (
    <div className="p-4 border-2 m-4">
      {isCountShown && <p>De waarde van de counter is: {count}</p>}
      <div className="flex gap-4 p-4">
        <MyButton
          onClick={() => {
            setCount(count - 1);
            setStudent({ fName: "John", lName: "Doe" });
            console.log(count);
          }}>
          -
        </MyButton>
        <MyButton
          onClick={() => {
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
          }}>
          +
        </MyButton>
      </div>
    </div>
  );
};

export default Counter;
