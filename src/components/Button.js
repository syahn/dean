import styled from "styled-components";
import React, { Component } from "react";
import { Popup } from "./Popup";

import emailImg from "../assets/email.png";

import "open-color/open-color.css";

export const Button = styled.button`
    padding: 9px;
    color: ${props => (props.primary ? "#fff" : "var(--oc-gray-8)")};
    border: 1px solid var(--oc-gray-1);
    border-radius: 3px;
    cursor: pointer;
    background: ${props =>
        props.primary ? "var(--oc-blue-8)" : "var(--oc-gray-0)"};

    &:hover {
        background: ${props =>
            props.primary ? "var(--oc-blue-9)" : "var(--oc-gray-2)"};
    }

    &:focus {
        box-shadow: 0 0 0 2px rgba(92, 156, 245, 0.5);
        outline: 0;
    }
`;

export class EmailButton extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            visibility: "hidden"
        };
    }

    clickHandler() {
        console.log("clicked");
        this.setState(({ visibility }) => ({ visibility: !visibility }));
    }

    render() {
        return (
            <div>
                <Button onClick={this.clickHandler}>
                    <img src={emailImg} alt="email icon" />
                </Button>
                <Popup visibility={this.state.visibility}>
                    <span>frankahn9@gmail.com</span>
                    <CopyButton>copy</CopyButton>
                </Popup>
            </div>
        );
    }
}

export const CopyButton = () => {
    const copyToClipboard = () => {
        const text = document.createElement("textarea");
        text.innerText = "frankahn9@gmail.com";
        document.body.appendChild(text);
        text.select();
        document.execCommand("copy");
        text.remove();
    };

    return <Button onClick={copyToClipboard}>copy</Button>;
};
