import React from "react";

const Buttons = ({ changeButtonText, isClickMe }) => {
  return (
    <div>
          <button className="clickme-button" onClick={() => changeButtonText(isClickMe)}>
            {isClickMe ? "Click me!" : "Loser!!"}
          </button>
    </div>
  );
};

export default Buttons;
