import React, { useState } from "react";

export default function About(props) {
  const [mystyle, setmystyle] = useState({
    color: "white",
    backgroundColor: "black",
    
  });
  const [btntext, setbuttontext] = useState("Enable Light Mode");
  const [text, setText] = useState("This is dark mode now");
  const toglemode = () => {
    if (mystyle.color === "white") {
      setmystyle({
        color: "black",
        backgroundColor: "white",
        border: "2px solid black",
      });
        setbuttontext("Enable Dark Mode");
        setText("This is light mode now");
        props.showalert("Light mode has been enabled","success")
    } else {
      setmystyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid sayang",
      });
        setbuttontext("Enable Light Mode");
        setText("This is dark mode now");
        props.showalert("Dark mode has been enabled","success")
    }
  };

  return (
    <>
      <div className="container-fluid my-3" style={mystyle}>
        <h1>{text}</h1>
      </div>
      <div className="container my-3">
        <button className="btn btn-primary" onClick={toglemode}>
          { btntext}
        </button>
      </div>
    </>
  );
}
