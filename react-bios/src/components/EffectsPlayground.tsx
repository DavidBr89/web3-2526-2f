import React, { useEffect, useState } from "react";
import MyButton from "./MyButton";

const EffectsPlayground = () => {
  // Regels hooks
  // 1 - Top level oproepen van hooks (genest zijn in andere functies, en moeten altijd in een React component gebruikt worden)
  // 2 - Niet genest in een if block of for loop / while, moet ook altijd in exact dezelfde volgorde
  const [count, setCount] = useState(0);
  const [isRefresh, setIsRefresh] = useState(false);
  //   State wijziging gaat er altijd voor zorgen dat component rerendert

  console.log("Log na (re)render ZONDER useEffect");

  //   useEffect - 3 types
  // TYPE 1 - Met een gewone callback functie dat je meegeeft
  useEffect(() => {
    // Callback functie wordt opgeroepen na bvb hier in dit geval na elke rerender
    console.log("Log na (re)render MET useEffect (TYPE 1)");
  });

  // TYPE 2 - Maar met een lege dependency array als tweede argument
  useEffect(() => {
    // Callback functie wordt enkel maar opgeroepen na het eerste keer renderen van de component (MOUNTEN)
    console.log("Log na render of refresh MET useEffect (TYPE 2)");
  }, []);

  //   TYPE 3 - Met een dependency array met een waarde in
  useEffect(() => {
    // Callback functie wordt opgroepen bij het mounten van de component en enkel bij het wijzigen van de isRefresh waarde
    console.log(
      "Log na render MET useEffect MET DEPENDENCY - ISREFRESH (TYPE 3)",
    );
  }, [isRefresh]);

  //   Count automatisch verhoogd om de 1 second met 1
  //   TYPE 4 - useEffect met een cleanup, opschoon functie
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // // Cleanup callback functie (Destructor)
    return () => clearInterval(timerId);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <MyButton
        className="uppercase"
        onClick={() => {
          setCount(count + 1);
        }}>
        Counter verhogen
      </MyButton>
      <p>{isRefresh ? "Refreshen" : "Niet refreshen"}</p>
      <MyButton
        onClick={() => {
          setIsRefresh(!isRefresh);
        }}>
        Refresh togglen
      </MyButton>
    </div>
  );
};

export default EffectsPlayground;
