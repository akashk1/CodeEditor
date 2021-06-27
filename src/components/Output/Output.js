import React from "react";
import classes from "./Output.module.css";
const Output = (props) => {
    const srcDoc = `
    <html>
       <body>
       ${props.html}
       </body>
       <style>
       ${props.css}
       </style>
       <script>
       ${props.javascript}
       </script>
    </html>`;
    const style = {
        backgroundColor: props.darkMode ? "rgb(56, 53, 53)" : "white",
    };
    localStorage.setItem("code", srcDoc);
    return (
        <div className={classes.output_container} style={style}>
            <iframe srcDoc={srcDoc} className={classes.output}></iframe>
        </div>
    );
};

export default Output;
