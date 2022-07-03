import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import Colors from "../../colors/colors";
import { useState } from "react";
import TaskAddModal from "../common/TaskAddModal";

const StyledNavToDoListAddItem = styled.div`
    color: black;
    font-weight: bold;
    margin: 10px;

    .icon {
        margin-right: 10px;
        font-size: 30px;
        vertical-align: middle;
    }

    .text {
        display: inline-block;
        vertical-align: middle;
    }

    &:hover {
        color: ${Colors.AAAAAA};
        cursor: pointer;
    }
`;

const NavTaskAdd = ({ onTaskAdd }) => {
    const [visible, setVisible] = useState(false);

    const onAddClick = () => {
        setVisible(true);
    };

    const onCancel = () => {
        setVisible(false);
    };

    const onConfirm = (task) => {
        onTaskAdd(task);
        setVisible(false);
    };

    return (
        <>
            <StyledNavToDoListAddItem onClick={onAddClick}>
                <FontAwesomeIcon className="icon" icon={faPlus} />
                <div className="text">목록 추가</div>
            </StyledNavToDoListAddItem>
            <TaskAddModal visible={visible} onCancel={onCancel} onConfirm={onConfirm} />
        </>
    );
};

export default NavTaskAdd;
