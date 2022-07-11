import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import {
    faTrashCan,
    faSquareCheck,
    faCircle,
    faStar,
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

    .box {
        height: 20px;
        padding: 10px;
        line-height: 20px;
        display: inline-block;
    }

    .text {
        font-weight: bold;
        margin-left: 10px;
        //vertical-align: middle;
    }

    &:hover {
        background: rgba(230, 230, 230, 0.25);
    }

    & + & {
        margin-top: 10px;
    }

    .important {
        color: ${Colors.F4F9F9};
        display: inline-block;
    }

    &:hover .important {
        color: rgb(255, 255, 255);
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

const TodoListItem = ({ todo, taskId, onToDoDelete, onToDoComplete, onToDoImportant, complete }) => {
    return (
        <StyledListItem>
            <div className="box">
                <div className="important" onClick={() => onToDoImportant(taskId, todo)}>
                    {todo.important ? (
                        <FontAwesomeIcon icon={faStar} color="yellow" />
                    ) : (
                        <FontAwesomeIcon icon={faStar} />
                    )}
                </div>
                <span className="text">{todo.do}</span>
            </div>
            <div className="sub-menu">
                {!complete && (
                    <div className="item done" onClick={() => onToDoComplete(taskId, todo.todoId)}>
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

const ToDoList = ({ taskId, task, onToDoAdd, onToDoDelete, onToDoComplete, onToDoImportant }) => {
    return (
        <>
            <StyledHeaderBox>
                <StyledHeader>{task.title}</StyledHeader>
            </StyledHeaderBox>
            <StyledListBox>
                {task.todos.map(
                    (todo, index) =>
                        !todo.complete && (
                            <TodoListItem
                                key={index}
                                todo={todo}
                                taskId={taskId}
                                onToDoDelete={onToDoDelete}
                                onToDoComplete={onToDoComplete}
                                onToDoImportant={onToDoImportant}
                            />
                        )
                )}

                {task.completeCount > 0 && (
                    <StyledComplete>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCircle} />
                        </div>
                        끝낸 일
                    </StyledComplete>
                )}

                {task.todos.map(
                    (todo, index) =>
                        todo.complete && (
                            <TodoListItem
                                key={index}
                                todo={todo}
                                taskId={todo.taskId}
                                onToDoDelete={onToDoDelete}
                                onToDoComplete={onToDoComplete}
                                onToDoImportant={onToDoImportant}
                                complete
                            />
                        )
                )}
            </StyledListBox>
            {task && task.type === "task" ? <ListAddBar taskId={task.taskId} onToDoAdd={onToDoAdd} /> : null}
        </>
    );
};

export default ToDoList;
