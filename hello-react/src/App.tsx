// import "./App.css";

import Header from "./components/Header";
import MyButton from "./components/MyButton";
import Title from "./components/Title";

function App() {
  const title = "Web 3 vanuit variabele";
  const subTitle = "Vak over TS en React";

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
    </div>
  );
}

export default App;
