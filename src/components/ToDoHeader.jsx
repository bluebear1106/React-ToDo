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
`;

const StyledHeaderButton = styled.div`
    width: 80px;
    background: ${Colors.F4F9F9};
    border-radius: 4px;
    text-align: center;
    &:hover {
        color: ${Colors.AAAAAA};
    }
`;

const ToDoHeader = () => {
    return (
        <StyledHeader>
            <StyledHeaderButton>해야할 일</StyledHeaderButton>
            <StyledHeaderButton>끝낸 일</StyledHeaderButton>
        </StyledHeader>
    );
};

export default ToDoHeader;
