import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import { faFileAlt } from "../../node_modules/@fortawesome/free-regular-svg-icons/index";

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
    }

    .text {
        display: inline-block;
        vertical-align: middle;
    }
`;

const ToDoList = () => {
    return (
        <StyledListBox>
            <StyledListItem>
                <FontAwesomeIcon className="icon" icon={faFileAlt} size="2x" />
                <div className="text">테스트</div>
            </StyledListItem>
        </StyledListBox>
    );
};

export default ToDoList;
