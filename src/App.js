import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import About from "./componentes/About";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import { useState } from "react";
import Alert from "./componentes/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [btntext, setbuttontext] = useState("Enable dark Mode"); 
  const [alert , setAlert] = useState(null);
  const showalert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000); 
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      setbuttontext("Enable light Mode");
      showalert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setbuttontext("Enable dark Mode");
      showalert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
  };
  return (
    <>
      <div className="container my-3">
        <BrowserRouter>
          <Navbar
            About="About Us" 
            home="Home"
            MyAPP="TextUtils"

            mode={mode}
            btntext={btntext}
            toggleMode={toggleMode}

          />
          <Alert alert={alert} />
          <Routes>
            <Route
              path="/"
              element={<Home heading="Enter a text to analyze" mode={mode} showalert={showalert} />}
            />
            <Route path="/about" element={<About showalert={showalert}  />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
