import React, { useState } from "react";
import Editor from "../Editor/Editor";
import Output from "../Output/Output";
import classes from "./Home.module.css";
const Home = ({ darkMode }) => {
    const [state, setState] = useState({
        css: "",
        html: "",
        javascript: "",
    });
    const onChange = (key, value) => {
        setState((state) => {
            return {
                ...state,
                [key]: value,
            };
        });
    };

    return (
        <div className={classes.container}>
            <div className={classes.editor}>
                <Editor mode='html' type='html' changed={onChange} darkMode={darkMode} />
                <Editor mode='css' type='css' changed={onChange} darkMode={darkMode} />
                <Editor mode='javascript' type='javascript' changed={onChange} darkMode={darkMode} />
            </div>
            <div className={classes.output}>
                <Output css={state.css} html={state.html} javascript={state.javascript} darkMode={darkMode} />
            </div>
        </div>
    );
};

export default Home;
