import React, { useState, useEffect } from "react";
import data from "./data.json";

const quote = [
  {
    quote:
      "You can spend your whole life traveling around the world searching for the Garden of Eden, or you can create it in your backyard.",
    author: "Khang Kijarro Nguyen",
  },
  {
    quote:
      "The sun rises, the sun falls, the wind blows and the birds sing no matter where you are. These are experiences that unite us all... something we can all enjoy together",
    author: "Melanie Charlene",
  },
  {
    quote:
      "Leaders get to tall heights by taking short steps. Being faithful, diligent and consistent with little steps is the secret to mounting greater heights.",
    author: " Israelmore Ayivor",
  },
  {
    quote:
      "Localisation stands, at best, at the limits of practical possibility, but it has the decisive argument in its favour that there will be no alternative.",
    author: "David Fleming,",
  },
  {
    quote:
      "Reversing the historical trajectory of human eating, for this meal the forest would be feeding us again.",
    author: "Michael Pollan",
  },
];

function Start() {
  const [counter, setCounter] = useState(2);
  // const [counter, setCounter] = useState(2);
  return (
    <div
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      <h2>{quote[counter % quote.length].quote}</h2>
      <p>{quote[counter % quote.length].author}</p>
    </div>
  );
}

export default Start;
