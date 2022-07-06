import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import {
    faFileAlt,
    faTrashCan,
    faSquareCheck,
    faCircle,
} from "../../node_modules/@fortawesome/free-regular-svg-icons/index";
import ListAddBar from "./ListAddBar";

const StyledHeaderBox = styled.div`
    //height: 40px;
    background: ${Colors.F4F9F9};
    font-weight: bold;
`;

const StyledHeader = styled.h1`
    //margin: 35px 25px 25px 25px;
    //font-size: 24px;
    text-align: left;
`;

const StyledListBox = styled.div`
    height: 520px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow-y: scroll;
    margin: 0px 25px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const StyledListItem = styled.div`
    //margin: 0px 25px;
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
        text-align: right;
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

const StyledComplete = styled.div`
    width: 150px;
    height: 30px;
    border-radius: 4px;
    background: rgba(239, 239, 239, 075);
    line-height: 30px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;

    .icon {
        margin: 0 10px;
        display: inline-block;
    }
`;

const ToDoHeader = ({ listName }) => {
    return (
        <StyledHeaderBox>
            <StyledHeader>해야할 일</StyledHeader>
        </StyledHeaderBox>
    );
};

const TodoListItem = ({ todo, taskId, onToDoDone, onToDoDelete, complete, type }) => {
    return (
        <StyledListItem>
            <FontAwesomeIcon className="icon" icon={faFileAlt} size="2x" />
            <div className="text">{todo.do}</div>
            <div className="sub-menu">
                {!complete && !type && (
                    <div className="item done" onClick={() => onToDoDone(taskId, todo)}>
                        <FontAwesomeIcon icon={faSquareCheck} size="lg" />
                    </div>
                )}
                <div className="item delete" onClick={() => onToDoDelete(taskId, todo.todoId)}>
                    <FontAwesomeIcon icon={faTrashCan} size="lg" />
                </div>
            </div>
        </StyledListItem>
    );
};

const ToDoList = ({ taskId, tasks, onToDoAdd, onToDoDone, onToDoDelete }) => {
    const task = tasks.find((t) => t.taskId === taskId);
    const typeCheck = task.type === "menu";
    return (
        <>
            <StyledHeaderBox>
                <StyledHeader>{task.title}</StyledHeader>
            </StyledHeaderBox>
            <StyledListBox>
                {typeCheck &&
                    tasks.map((t) =>
                        t.todos.progress.map((todo, index) => (
                            <TodoListItem
                                key={index}
                                todo={todo}
                                taskId={t.taskId}
                                onToDoDone={onToDoDone}
                                onToDoDelete={onToDoDelete}
                                type
                            />
                        ))
                    )}

                {!typeCheck &&
                    task.todos.progress.map((todo, index) => (
                        <TodoListItem
                            key={index}
                            todo={todo}
                            taskId={taskId}
                            onToDoDone={onToDoDone}
                            onToDoDelete={onToDoDelete}
                        />
                    ))}

                {!typeCheck && task.todos.complete.length > 0 && (
                    <StyledComplete>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCircle} />
                        </div>
                        끝낸 일
                    </StyledComplete>
                )}

                {!typeCheck &&
                    task.todos.complete.length > 0 &&
                    task.todos.complete.map((todo, index) => (
                        <TodoListItem
                            key={index}
                            todo={todo}
                            taskId={taskId}
                            onToDoDone={onToDoDone}
                            onToDoDelete={onToDoDelete}
                            complete
                        />
                    ))}
            </StyledListBox>
            {task && task.type === "task" ? <ListAddBar taskId={taskId} onToDoAdd={onToDoAdd} /> : null}
        </>
    );
};

export default ToDoList;
