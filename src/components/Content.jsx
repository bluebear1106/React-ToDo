import React from "react";
import styled from "styled-components";
import Colors from "../colors/colors";
import ToDoList from "./ToDoList";

const StyledContent = styled.div`
    padding: 20px;
    background: ${Colors.F4F9F9};
    flex-grow: 1;
    border-left: 1px solid ${Colors.AAAAAA};
`;

const Content = ({ taskId, task, onToDoAdd, onToDoDelete, onToDoComplete, onToDoImportant }) => {
    return (
        <StyledContent>
            <ToDoList
                taskId={taskId}
                task={task}
                onToDoAdd={onToDoAdd}
                onToDoDelete={onToDoDelete}
                onToDoComplete={onToDoComplete}
                onToDoImportant={onToDoImportant}
            />
        </StyledContent>
    );
};

export default Content;
