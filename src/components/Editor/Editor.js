import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import classes from "./Editor.module.css";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/snippets/html";
const map = {
    javascript: "JavaScript",
    html: "HTML",
    css: "CSS",
};
const defaultValue = {
    javascript: `document.getElementById('demo').style.color = 'red'`,
    html: `<div id="demo"> Hello World</div>`,
    css: `div {
        font-size : 18px;
        width:500px;
        height : 200px;
        background-color : black;
    }`,
};
const Editor = (props) => {
    const [width, setWidth] = useState(document.documentElement.clientWidth);
    const [height, setHeight] = useState(document.documentElement.clientHeight);
    const [value, setValue] = useState(defaultValue[props.type]);
    const onChange = (newValue) => {
        setValue(newValue);
    };
    const run = () => {
        props.changed(props.type, value);
    };
    const intervalId = setInterval(() => {
        setWidth(document.documentElement.clientWidth);
        setHeight(document.documentElement.clientHeight);
    }, 10);
    useEffect(() => {
        props.changed(props.type, defaultValue[props.type]);
        return () => {
            clearInterval(intervalId);
        };
    }, [width, height]);

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>{map[props.type]}</div>
                <div>
                    <button className={classes.button} onClick={run}>
                        Run
                    </button>
                </div>
            </div>
            <AceEditor
                width={width * 0.33 + "px"}
                height={height * 0.4 + "px"}
                mode={props.mode}
                theme={props.darkMode ? "twilight" : "github"}
                onChange={onChange}
                name={props.type}
                defaultValue={defaultValue[props.type]}
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
            />
        </div>
    );
};

export default Editor;
