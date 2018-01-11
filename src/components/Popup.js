import styled from "styled-components";

export const Popup = styled.div`
    display: ${props => props.visibility ? "none" : "inherit"};
    border-radius: 3px;
    width: 250px;
    padding: 20px;
    transition: 0.3s;
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0),
        0 0 0 rgba(16, 22, 26, 0);
    background: #fff;
`;

