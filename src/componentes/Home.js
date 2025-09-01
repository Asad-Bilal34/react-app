import React, { useState } from "react";

export default function Home(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    setMessage("Converted to uppercase");
    setTimeout(() => {
      setMessage("");
    }, 2000);
    props.showalert("Converted to uppercase","success")
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    setMessage("Converted to lowercase");
    setTimeout(() => {
      setMessage("");
    }, 2000);
    props.showalert("Converted to lowercase","success")
  };
  const clearbtn = () => {
    setText("");
    setMessage("Clear box");
    setTimeout(() => {
      setMessage("");
    }, 2000);
    props.showalert("Text cleared","success")
  };
  const copytext = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard
      .writeText(text.value)
      .then(() => {
        let msg = document.getElementById("msg");
        msg.innerHTML = "Text copied to clipboard";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 2000);
        props.showalert("Text copied to clipboard","success")
      })
      .catch((error) => {
        document.getElementById("msg").innerHTML =
          "Failed to copy text: " + error;
      });
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here?");
  const [message, setMessage] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode==='dark'?'white':'black'}}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor:props.mode==='dark'?'grey':'white',
              color: props.mode==='dark'?'white':'black',
            }}
            id="mybox"
            rows="8"
          ></textarea>
          <p className="message" id="msg">
            {message}
          </p>
        </div>
        <div>
          <button className="btn btn-primary my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-secondary mx-1" onClick={handleLoClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-secondary mx-1" onClick={clearbtn}>
            Clear
          </button>
          <button className="btn btn-secondary mx-1" onClick={copytext}>
            Copy Text
          </button>
        </div>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode==='dark'?'white':'black'}}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
