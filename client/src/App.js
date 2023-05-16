import React from "react";
import './App.css';
import Homepage from "./routes/Homepage";
// import {useEffect} from "react";

function App() {
  // useEffect(() => {
  //   fetch("/api").then(
  //       data => data.json()
  //   ).then(
  //       response => {
  //     console.log(response);
  //   })
  // }, []);
  return (
      <>
        <Homepage/>
      </>
  );
}

export default App;
