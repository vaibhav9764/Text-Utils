// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";
import About from "./componets/About"
import Alert from "./componets/Alert";

// import { Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is Enabaled", "success");
      // document.title = "Text-Utils : light mode";



    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(52 41 77)";
      showAlert("Dark mode is Enabaled", "success");
      // document.title = "Text-Utils : dark mode";
    }
  }
  const [alert, setAlert] = useState("this", "va");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 1500);
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Me" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextForm heading="Enter The Text below" mode={mode} showAlert={showAlert} />
      </div>
      <About mode={mode} />


      {/* <Navbar title="TextUtils" aboutText="About Me" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> */}

      {/* <Routes>
        <Route exact path="/" element={ <div className="container my-3" >
        <TextForm heading="Enter The Text below" mode={mode} showAlert={showAlert} />
      </div>} />
        <Route exact path="/about" element={<About />} />
      </Routes> */}


    </>
  );
}

export default App;
