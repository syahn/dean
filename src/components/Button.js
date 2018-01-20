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

const CloseButton = styled.button`
    border: none;
    position: absolute;
    cursor: pointer;
    top: 3px;
    right: 1px;

    &:focus {
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
        this.setState(({ visibility }) => ({
            visibility: visibility === "hidden" ? "visible" : "hidden"
        }));
    }

    render() {
        return (
            <div>
                <EmailIconButton
                    onClick={this.clickHandler}
                    onMouseover={this.clickHandler}
                >
                    <img src={emailImg} alt="email icon" />
                </EmailIconButton>
                <EmailPopup visibility={this.state.visibility}>
                    <span>frankahn9@gmail.com</span>
                    <CopyButton>copy</CopyButton>
                    <CloseButton onClick={this.clickHandler}>X</CloseButton>
                </EmailPopup>
            </div>
        );
    }
}

const EmailIconButton = styled.button`
    background-color: #fff;
    border: none;
    cursor: pointer;

    &:focus {
        outline: 0;
    }
`;

const EmailPopup = Popup.extend`
    position: relative;
    width: 215px;
    top: 5px;
    padding: 0px 18px;

    span {
        display: inline-block;
        position: relative;
        top: 1px;
    }
`;

export const CopyButton = () => {
    const ButtonEl = Button.extend`
        margin: 8px;
        padding: 4px 8px 7px;
    `;

    const copyToClipboard = () => {
        const text = document.createElement("textarea");
        text.innerText = "frankahn9@gmail.com";
        document.body.appendChild(text);
        text.select();
        document.execCommand("copy");
        text.remove();
    };

    return <ButtonEl onClick={copyToClipboard}>copy</ButtonEl>;
};

// export const Popup = styled.div`
//     display: ${props => props.visibility ? "none" : "inherit"};
//     border-radius: 3px;
//     width: 250px;
//     padding: 20px;
//     transition: 0.3s;
//     box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0),
//         0 0 0 rgba(16, 22, 26, 0);
//     background: #fff;
// `;
