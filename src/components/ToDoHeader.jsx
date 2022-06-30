import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";

const StyledHeaderBox = styled.div`
    height: 40px;
    background: ${Colors.F4F9F9};
    font-weight: 600;
`;

const StyledHeader = styled.div`
    margin: 35px 25px 25px 25px;
    font-size: 24px;
    background: ${Colors.F4F9F9};
    text-align: left;
    &:hover {
        color: ${Colors.AAAAAA};
    }
`;

const ToDoHeader = () => {
    return (
        <StyledHeaderBox>
            <StyledHeader>해야할 일</StyledHeader>
        </StyledHeaderBox>
    );
};

export default ToDoHeader;
