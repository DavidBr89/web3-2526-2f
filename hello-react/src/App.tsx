// import "./App.css";

import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import MyButton from "./components/MyButton";
import Title from "./components/Title";

function App() {
  const title = "Web 3 vanuit variabele";
  const subTitle = "Vak over TS en React";

  const [isCountShown, setIsCountShown] = useState(true);

  return (
    <div className="header">
      {/* Gebruiken van React component */}
      <Header subtitle={subTitle} title={title} width={3780}></Header>
      <p>{title}</p>
      <MyButton>
        <div>
          <p>Klik mij vanuit App</p>
        </div>
        <Title title="Knop titel" />
      </MyButton>

      {/* TODO: ToggleCounter component maken met correcte werking en typing */}
      <MyButton
        onClick={() => {
          setIsCountShown(!isCountShown);
        }}>
        Toggle Counter
      </MyButton>

      {/* Conditioneel renderen */}
      {/* {isCountShown && <Counter startCount={23} />} */}

      <Counter startCount={23} isCountShown={isCountShown} />
    </div>
  );
}

export default App;
