import "./App.css";
import Tag from "./components/Tag";
import Bar from "./components/Bar";
import Select from "./components/Select";
import { useState } from "react";


function App() {
  const currency = "SAR";
  const spent = "50.8";
  const tags = [
    { text: "Food", percent: "30%", color: "#FFB800" },
    { text: "Shopping", percent: "60%", color: "#1BA493" },
    { text: "Movies", percent: "10%", color: "#E44816" },
  ];
  const [selected, setSelected] = useState("this week")

  return (
    <div
      style={{
        fontFamily: "Poppins",
      }}
      className="App flex justify-center items-center h-screen text-white"
    >
      <div
        style={{
          backgroundColor: "#3F3F3F",
          width: "333px",
          borderRadius: "12px",
          gap: "26px",
        }}
        className="box flex flex-col shadow p-8"
      >
        <div
          className="head flex justify-between items-center"
        >
          <h1 className="text-base font-bold">Your total spend</h1>
          <Select setSelected={setSelected} />
        </div>
        <div className="price-box flex items-baseline font-normal" >
          <div className="currency mr-2 text-base">
            {currency}
          </div>
          <div className="price text-3xl">
            {spent}
          </div>
        </div>
        <div>
          <div
            className="bar flex flex-row h-2 w-full"
          >
            {tags.map((tag, index) => {
              return <Bar key={index} tag={tag} index={index} len={tags.length} />;
            })}
          </div>
          <div className="tags flex mt-3 text-xs font-normal">
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
