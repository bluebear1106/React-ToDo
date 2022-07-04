import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import { faFileAlt, faTrashCan, faSquareCheck } from "../../node_modules/@fortawesome/free-regular-svg-icons/index";
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
`;

const StyledListBox = styled.div`
    height: 520px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const StyledListItem = styled.div`
    margin: 0px 25px;
    border-radius: 4px;
    background: rgb(255, 255, 255);

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

    &:hover {
        background: rgba(230, 230, 230, 0.25);
    }

    &:hover .icon {
        color: rgb(255, 255, 255);
    }

    & + & {
        margin-top: 10px;
    }

    .sub-menu {
        width: 100px;
        float: right;
        display: none;
    }

    .sub-menu .item {
        display: inline-block;
        width: 40px;
        height: 30px;
        padding: 5px;
        text-align: center;
        line-height: 30px;
        //background: red;
    }

    .sub-menu .done {
        background: skyblue;
    }

    .sub-menu .delete {
        background: red;
    }

    .sub-menu .item svg {
        //vertical-align: middle;
    }

    &:hover .sub-menu {
        display: inline-block;
    }

    .sub-menu .done:hover {
        background: rgba(135, 206, 235, 0.5);
    }

    .sub-menu .delete:hover {
        background: rgba(255, 0, 0, 0.5);
    }
`;

const ToDoHeader = ({ listName }) => {
    return (
        <StyledHeaderBox>
            <StyledHeader>해야할 일</StyledHeader>
        </StyledHeaderBox>
    );
};

const TodoListItem = ({ todo, taskId, onToDoDone, onToDoDelete }) => {
    return (
        <StyledListItem>
            <FontAwesomeIcon className="icon" icon={faFileAlt} size="2x" />
            <div className="text">{todo.do}</div>
            <div className="sub-menu">
                <div className="item done" onClick={() => onToDoDone(taskId, todo.todoId)}>
                    <FontAwesomeIcon icon={faSquareCheck} size="lg" />
                </div>
                <div className="item delete" onClick={() => onToDoDelete(taskId, todo.todoId)}>
                    <FontAwesomeIcon icon={faTrashCan} size="lg" />
                </div>
            </div>
        </StyledListItem>
    );
};

const ToDoList = ({ taskId, task, onToDoAdd, onToDoDone, onToDoDelete }) => {
    return (
        <>
            <StyledHeaderBox>
                <StyledHeader>{task.title}</StyledHeader>
            </StyledHeaderBox>
            <StyledListBox>
                {task.todos.map((todo, index) => (
                    <TodoListItem
                        key={index}
                        todo={todo}
                        taskId={taskId}
                        onToDoDone={onToDoDone}
                        onToDoDelete={onToDoDelete}
                    />
                ))}
            </StyledListBox>
            {task && task.type === "task" ? <ListAddBar taskId={taskId} onToDoAdd={onToDoAdd} /> : null}
        </>
    );
};

export default ToDoList;
