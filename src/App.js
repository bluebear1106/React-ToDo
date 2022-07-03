import "./App.css";
import NavigaionBar from "./components/NavigationBar";
import styled from "styled-components";
import Content from "./components/Content";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`;

const menus = {
    menuId: 0,
    list: [
        {
            type: "today",
            id: 0,
            title: "오늘 할 일",
        },
        {
            type: "important",
            id: 1,
            title: "중요",
        },
    ],
};

const tasks = [
    {
        taskId: 0,
        type: "menu",
        title: "오늘 할 일",
        date: "",
        todos: [
            {
                todoId: 0,
                do: "작업1",
                state: false,
            },
            {
                todoId: 1,
                do: "작업1",
                state: false,
            },
        ],
    },
    {
        taskId: 1,
        type: "menu",
        title: "중요",
        date: "",
        todos: [
            {
                todoId: 0,
                do: "작업1",
                state: false,
            },
            {
                todoId: 1,
                do: "작업1",
                state: false,
            },
        ],
    },
    {
        taskId: 2,
        type: "task",
        title: "테스트",
        date: new Date().toLocaleTimeString(),
        todos: [
            {
                todoId: 0,
                do: "작업1",
                state: false,
            },
            {
                todoId: 1,
                do: "작업1",
                state: false,
            },
        ],
    },
];

function App() {
    const [taskId, setTaskId] = useState(0);
    const [task, setTask] = useState(tasks);

    const onTaskClick = (taskId) => {
        setTaskId(taskId);
    };

    const onTaskAdd = (taskTitle) => {
        const temp = {
            todoId: 3,
            type: "task",
            title: taskTitle,
            date: new Date().toLocaleTimeString(),
            todos: [],
        };
        setTask(task.concat(temp));
    };

    const onToDoAdd = (taskId, text) => {
        const todo = {
            do: text,
            state: false,
        };

        setTask(
            task.map((t) => {
                return t.taskId === taskId ? { ...t, todos: t.todos.concat(todo) } : t;
            })
        );
    };

    const onToDoDone = (taskId, todoId) => {
        setTask(
            task.map((t) => {
                return t.taskId === taskId
                    ? { ...t, todos: t.todos.map((todo) => (todo.todoId === todoId ? { ...todo, state: true } : todo)) }
                    : t;
            })
        );
    };

    const onToDoDelete = (taskId, todoId) => {
        setTask(
            task.map((t) => {
                return t.taskId === taskId ? { ...t, todos: t.todos.filter((todo) => todo.todoId !== todoId) } : t;
            })
        );
    };

    return (
        <>
            <Container>
                <NavigaionBar taskId={taskId} tasks={task} onTaskClick={onTaskClick} onTaskAdd={onTaskAdd} />
                <Content
                    taskId={taskId}
                    task={task.find((t) => t.taskId === taskId)}
                    onToDoAdd={onToDoAdd}
                    onToDoDone={onToDoDone}
                    onToDoDelete={onToDoDelete}
                />
            </Container>
        </>
    );
}

export default App;
