import "./App.css";
import NavigaionBar from "./components/NavigationBar";
import styled from "styled-components";
import Content from "./components/Content";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

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
        todos: {
            progress: [
                {
                    todoId: 0,
                    do: "작업1",
                },
                {
                    todoId: 1,
                    do: "작업1",
                }
            ],
            complete: [
            ]
        },
        todoCount: 2
    },
    {
        taskId: 1,
        type: "menu",
        title: "중요",
        date: "",
        todos: {
            progress: [
                {
                    todoId: 0,
                    do: "작업1",
                },
                {
                    todoId: 1,
                    do: "작업1",
                }
            ],
            complete: [
            ]
        },
        todoCount: 2
    },
    {
        taskId: 2,
        type: "task",
        title: "테스트",
        date: new Date().toLocaleTimeString(),
        todos: {
            progress: [
                {
                    todoId: 0,
                    do: "작업1",
                },
                {
                    todoId: 1,
                    do: "작업1",
                }
            ],
            complete: [
                {
                    todoId: 2,
                    do: "작업2"
                }
            ]
        },
        todoCount: 3
    }
];

function App() {
    const [taskId, setTaskId] = useState(0);
    const [task, setTask] = useState(tasks);
    const taskCount = task.length;

    const onTaskClick = (taskId) => {
        setTaskId(taskId);
    };

    const onTaskAdd = (taskTitle) => {
        const temp = {
            taskId: taskCount,
            type: "task",
            title: taskTitle,
            date: new Date().toLocaleTimeString(),
            todos: {
                progress: [],
                complete: []
            },
            todoCount: 0
        };
        setTask(task.concat(temp));
    };

    const onToDoAdd = (taskId, text) => {
        let count = task.find((t) => t.taskId === taskId).todoCount;
        const todo = {
            todoId: count,
            do: text
        };

        setTask(
            task.map((t) => {
                return t.taskId === taskId ? { ...t, todos: { ...t.todos, progress: t.todos.progress.concat(todo) }, todoCount: ++count } : t;
            })
        );
    };


    const onToDoDone = (taskId, todo) => {
        const tempTask = task.find((t) => t.taskId === taskId);
        tempTask.todos.progress = tempTask.todos.progress.filter((work) => todo.todoId !== work.todoId);
        tempTask.todos.complete = tempTask.todos.complete.concat(todo);

        setTask(
            task.map((t) => {
                return t.taskId === taskId ? { ...t, ...tempTask } : t;
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
                    tasks={task}
                    onToDoAdd={onToDoAdd}
                    onToDoDone={onToDoDone}
                    onToDoDelete={onToDoDelete}
                />
            </Container>
        </>
    );
}

export default App;
