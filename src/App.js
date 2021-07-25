import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [d, updateD] = useState("");
  const [result, updateResult] = useState("");
  const [output, updateOutput] = useState(false);

  var year = d.split("-")[0];
  var month = d.split("-")[1];
  var day = d.split("-")[2];
  console.log(d, day, month, day);

  function palindromeCalculator() {
    var dmy = day + month + year;
    var myd = month + year + day;
    var ydm = year + day + month;
    var smdy = "";

    if (d !== "") {
      if (dmy === dmy.split("").reverse().join("")) {
        updateResult(true);
      } else if (myd === dmy.split("").reverse().join("")) {
        updateResult(true);
      } else if (ydm === dmy.split("").reverse().join("")) {
        updateResult(true);
      } else if (month[0] === "0") {
        smdy = month[1] + year + day;
        if (smdy === dmy.split("").reverse().join("")) {
          updateResult(true);
        }
      } else {
        updateResult(false);
      }
      updateOutput(true);
    }
  }

  return (
    <div className="App">
      <h1>Welcome to Birthday Palindrome finder</h1>
      <h2>
        This app checks your birthdate in 4 formats yyyy-mm-dd, dd-mm-yyyy,
        mm-dd-yy, m-dd-yyyy
      </h2>
      <input
        type="date"
        onChange={(event) => {
          updateD(event.target.value);
        }}
      ></input>
      <br></br>
      <button onClick={palindromeCalculator}>Click here</button>
      <h2>Your output will be displayed below</h2>

      {output ? (
        <h2>
          {result
            ? "Yay you birthday is a palindrome"
            : "Your birthday is not a palindrome"}
        </h2>
      ) : null}
    </div>
  );
}
