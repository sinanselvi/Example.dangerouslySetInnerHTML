import React, { Component } from "react";

export default class DangerHtmlComponent extends Component {
    htmlDecode(input, tag = "div") {
        var e = document.createElement(tag);
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    dangerHTML(context) {
        return (
            <div
                dangerouslySetInnerHTML={{ __html: this.htmlDecode(context) }}
            />
        );
    }

    render() {
        return this.dangerHTML(this.props.content);
    }
}
