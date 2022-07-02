import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faStar, faSun } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
import Colors from "../colors/colors";
import NavTaskAddItem from "./nav/NavTaskAddItem";

const StyledNavBar = styled.div`
    width: 320px;
    background: ${Colors.F4F9F9};
    display: flex;
    flex-direction: column;
`;

const StyledNavHeader = styled.div`
    color: ${Colors.AAAAAA};
    font-weight: bold;
    margin: 20px 20px 20px 20px;
    display: flex;
    align-items: center;

    span {
        display: block;
        margin-left: 12px;
        font-size: 32px;
    }
`;

const StyledNavMenuBox = styled.div`
    border-bottom: 1px solid ${Colors.AAAAAA};
`;

const StyledNavToDoListBox = styled.div`
    flex-grow: 1;
`;

const StyledNavItem = styled.div`
    color: black;
    font-weight: bold;
    margin: 10px;
`;

const StyledNavMenuItem = styled(StyledNavItem)`
    .box {
        width: 5px;
        height: 30px;
        margin-right: 10px;
        background: black;
        display: inline-block;
        vertical-align: middle;
    }

    &:hover {
        color: ${Colors.AAAAAA};
        cursor: pointer;
    }

    &:hover .box {
        background: ${Colors.AAAAAA};
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

// const NavMenuBox = ({ taskId, menuClick }) => {
//     return (
//         <StyledNavMenuBox>
//             {menus.list.map((menu) => (
//                 <StyledNavMenuItem key={menu.id} onClick={() => menuClick(menu.id)}>
//                     <div className={`box ${menus.menuId === menu.id ? "active" : ""}`} />
//                     <div className="text">{menu.title}</div>
//                 </StyledNavMenuItem>
//             ))}
//         </StyledNavMenuBox>
//     );
// };

// const NavToDoListBox = ({ tasks, onTaskAdd }) => {
//     return (
//         <StyledNavToDoListBox>
//             {tasks.map((task) => (
//                 <StyledNavMenuItem key={task.todoId}>
//                     <div className="text">{task.title}</div>
//                 </StyledNavMenuItem>
//             ))}
//             <NavTaskAddItem onTaskAdd={onTaskAdd} />
//         </StyledNavToDoListBox>
//     );
// };

const NavigaionBar = ({ taskId, tasks, onTaskClick, onTaskAdd }) => {
    return (
        <StyledNavBar>
            <StyledNavHeader>
                <FontAwesomeIcon icon={faList} size="2x" />
                <span>ToDo</span>
            </StyledNavHeader>
            <StyledNavMenuBox>
                {tasks.map((task) =>
                    task.type === "menu" ? (
                        <StyledNavMenuItem key={task.taskId} onClick={() => onTaskClick(task.taskId)}>
                            <div className={`box ${task.taskId === taskId ? "active" : ""}`} />
                            <div className="text">{task.title}</div>
                        </StyledNavMenuItem>
                    ) : null
                )}
            </StyledNavMenuBox>
            <StyledNavToDoListBox>
                {tasks.map((task) =>
                    task.type === "task" ? (
                        <StyledNavMenuItem key={task.taskId} onClick={() => onTaskClick(task.taskId)}>
                            <div className={`box ${task.taskId === taskId ? "active" : ""}`} />
                            <div className="text">{task.title}</div>
                        </StyledNavMenuItem>
                    ) : null
                )}
                <NavTaskAddItem onTaskAdd={onTaskAdd} />
            </StyledNavToDoListBox>
        </StyledNavBar>
    );
};

export default NavigaionBar;
