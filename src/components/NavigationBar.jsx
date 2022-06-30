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

    .box {
        width: 5px;
        height: 30px;
        margin-right: 10px;
        background: black;
        display: inline-block;
        vertical-align: middle;
    }

    &:hover .box {
        color: ${Colors.AAAAAA};
        cursor: pointer;
    }
    .active {
        background: skyblue;
        display: inline-block;
        vertical-align: middle;
    }

    .text {
        display: inline-block;
        vertical-align: middle;
    }
`;

const NavigaionBar = () => {
    return (
        <StyledNavBar>
            <StyledNavHeader>
                <FontAwesomeIcon icon={faList} size="2x" />
                <span>ToDo</span>
            </StyledNavHeader>
            <StyledNavItem>
                <div className="box"></div>
                <div className="text">오늘 할 일</div>
            </StyledNavItem>
            <StyledNavItem>중요</StyledNavItem>
            <StyledNavItem>중요</StyledNavItem>
            <StyledNavItem>테스트</StyledNavItem>
        </StyledNavBar>
    );
};

export default NavigaionBar;
