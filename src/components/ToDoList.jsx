import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import { faFileAlt } from "../../node_modules/@fortawesome/free-regular-svg-icons/index";
import ListAddBar from "./ListAddBar";

const StyledHeaderBox = styled.div`
    height: 40px;
    background: ${Colors.F4F9F9};
    font-weight: bold;
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

const StyledListBox = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const StyledListItem = styled.div`
    margin: 0px 25px;
    border-radius: 4px;
    background: white;

    .icon {
        margin: 5px;
        color: ${Colors.F4F9F9};
        vertical-align: middle;
    }

    .text {
        display: inline-block;
        font-weight: bold;
        vertical-align: middle;
    }
`;

const ToDoHeader = ({ listName }) => {
    return (
        <StyledHeaderBox>
            <StyledHeader>해야할 일</StyledHeader>
        </StyledHeaderBox>
    );
};

const ToDoList = ({ type }) => {
    return (
        <>
            <ToDoHeader />
            <StyledListBox>
                <StyledListItem>
                    <FontAwesomeIcon className="icon" icon={faFileAlt} size="2x" />
                    <div className="text">테스트</div>
                </StyledListItem>
            </StyledListBox>
            {type && type === "task" ? <ListAddBar /> : null}
        </>
    );
};

export default ToDoList;
