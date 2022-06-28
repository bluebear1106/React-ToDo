import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";

const StyledContent = styled.div`
    background: ${Colors.F4F9F9};
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    border-left: 1px solid ${Colors.AAAAAA};
`;

const Content = ({ children }) => {
    return <StyledContent>{children}</StyledContent>;
};

export default Content;
