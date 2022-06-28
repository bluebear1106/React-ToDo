import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";

const StyledNavBar = styled.div`
    height: 100vh;
    width: 250px;
    background: ${Colors.F4F9F9};
`;

const StyledNavItem = styled.div`
    color: ${Colors.AAAAAA};
    font-weight: 600;
    margin-left: 20px;
    margin-top: 25px;

    &:hover {
        color: black;
    }
`;

const NavigaionBar = () => {
    return (
        <StyledNavBar>
            <StyledNavItem>오늘 할 일</StyledNavItem>
            <StyledNavItem>중요</StyledNavItem>
            <StyledNavItem>중요</StyledNavItem>
            <StyledNavItem>테스트</StyledNavItem>
        </StyledNavBar>
    );
};

export default NavigaionBar;
