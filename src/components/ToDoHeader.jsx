import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";

const StyledHeader = styled.div`
    height: 40px;
    background: ${Colors.F4F9F9};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 600;

    .right {
        border-right: 1px solid black;
    }

    .left {
        border-left: 1px solid black;
    }
`;

const StyledHeaderButton = styled.div`
    flex-grow: 1;
    background: ${Colors.F4F9F9};
    text-align: center;
    &:hover {
        color: ${Colors.AAAAAA};
    }
`;

const ToDoHeader = () => {
    return (
        <StyledHeader>
            <StyledHeaderButton className="right">해야할 일</StyledHeaderButton>
            <StyledHeaderButton className="left">끝낸 일</StyledHeaderButton>
        </StyledHeader>
    );
};

export default ToDoHeader;
