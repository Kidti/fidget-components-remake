import "./App.css";
import Buttons from "./Components/Buttons";
import Counter from "./Components/Counter";
import { useState } from "react";

function App() {
  const [button, setButton] = useState([
    { id: 1, isClickMe: true },
    { id: 2, isClickMe: true },
    { id: 3, isClickMe: true },
    { id: 4, isClickMe: true },
    { id: 5, isClickMe: false },
  ]);

  const [countNumber, setCountNumber] = useState(0);

  const changeButtonText = (isClickMe) => {
    if (!isClickMe) {
      return;
    }
    let truePosition = Math.floor(Math.random() * button.length);
    while (button[truePosition].isClickMe) {
      truePosition = Math.floor(Math.random() * button.length);
    }
    setButton(
      button.map((btnItem, index) => {
        return { id: btnItem.id, isClickMe: index === truePosition };
      })
    );
  };

  const increase = () => {
    setCountNumber(countNumber + 1);
  };
  const decrease = () => {
    setCountNumber(countNumber - 1);
  };

  return (
    <div className="App">
      <h1>Clicking Thingy</h1>
      <div className="flex">
        <div className="grid">
          <div className="tile tile-one tile-text grid-col-span-2">
            Hi! This is a very simple web application made by Kidti. She is now
            learning React so please be kind and enjoy the buttons below. While I was remaking this, I learned about grid, gradient, React components, props, hooks and many more. Happy
            clicking!
          </div>
          <div className="tile tile-text">
            This tile will be filled with something similar to these fidget cube
            stress relievers.
          </div>
          <div className="tile tile-text">
            This tile is dedicated to my future self. Hi, future Me, I really hope
            that you can easily build more complicated apps.
          </div>
          <div className="tile btn-box grid-col-span-2">
            {button.map((b) => (
              <Buttons
                key={b.id}
                changeButtonText={changeButtonText}
                isClickMe={b.isClickMe}
              />
            ))}
          </div>
          <div className="tile counter-box">
            <Counter
              countNumber={countNumber}
              increase={increase}
              decrease={decrease}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
