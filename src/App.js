import React from "react";
import DangerHtmlComponent from "./DangerHtmlComponent";

var exampleContent =
    "&lt;p&gt;&lt;strong&gt;dangerouslySetInnerHTML&lt;/strong&gt;&lt;/p&gt;";

function htmlDecode(input) {
    var e = document.createElement("div");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

function DangerHTML(context) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: htmlDecode(exampleContent),
            }}
        />
    );
}

function App() {
    return (
        <div className="App">
            <DangerHTML />
            <DangerHtmlComponent content={exampleContent} />
        </div>
    );
}

export default App;
