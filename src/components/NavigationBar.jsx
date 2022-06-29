import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
import Colors from "../colors/colors";

const StyledNavBar = styled.div`
    width: 260px;
    background: ${Colors.F4F9F9};
`;

const StyledNavHeader = styled.div`
    color: ${Colors.AAAAAA};
    font-weight: 600;
    margin: 20px 20px 20px 20px;
    display: flex;
    align-items: center;

    span {
        display: block;
        margin-left: 12px;
        font-size: 32px;
    }
`;

const StyledNavItem = styled.div`
    color: black;
    font-weight: 600;
    margin: 20px 20px 20px 20px;

    &:hover {
        color: ${Colors.AAAAAA};
        cursor: pointer;
    }
`;

const NavigaionBar = () => {
    return (
        <StyledNavBar>
            <StyledNavHeader>
                <FontAwesomeIcon icon={faList} size="2x" />
                <span>ToDo</span>
            </StyledNavHeader>
            <StyledNavItem>오늘 할 일</StyledNavItem>
            <StyledNavItem>중요</StyledNavItem>
            <StyledNavItem>중요</StyledNavItem>
            <StyledNavItem>테스트</StyledNavItem>
        </StyledNavBar>
    );
};

export default NavigaionBar;
