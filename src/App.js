import React, { useState } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import Switch from "@material-ui/core/Switch";
const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const switchHandler = (e) => {
        setDarkMode(e.target.checked);
    };
    const headerStyle = {
        backgroundColor: darkMode ? "rgb(56, 53, 53)" : "white",
        color: darkMode ? "white" : "black",
    };
    const download = () => {
        const element = document.createElement("a");
        const file = new Blob([localStorage.getItem("code")], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "download.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };
    return (
        <div className='App' style={{ backgroundColor: darkMode ? "rgb(56, 53, 53)" : "white" }}>
            <div className='header' style={headerStyle}>
                <div className='title'> Code Editor </div>
                <div>
                    <label>{darkMode ? "Dark Mode" : "Light Mode"}</label>
                    <Switch checked={darkMode} onChange={switchHandler} />
                </div>
                <button className='button' onClick={download}>
                    Download Code
                </button>
            </div>
            <div>
                <Home darkMode={darkMode} />
            </div>
        </div>
    );
};

export default App;
