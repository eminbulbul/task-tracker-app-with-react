import "./App.css";
import GorevEkle from "./component/GorevEkle";
import Header from "./component/Header";
import { useState } from "react";
import eklenmisGorevler from "./component/eklenmisGorevler";

function App() {
  const [emirler, setEmir] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <GorevEkle />
      <eklenmisGorevler />
    </div>
  );
}

export default App;
