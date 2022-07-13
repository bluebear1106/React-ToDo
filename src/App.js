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

const initialTasks = [
    {
        taskId: 0,
        type: "today",
        title: "오늘 할 일",
        date: "",
        todos: [],
        todoCount: 2,
        completeCount: 0
    },
    {
        taskId: 1,
        type: "important",
        title: "중요",
        date: "",
        todos: [
            {
                taskId: 2,
                todoId: 0,
                do: "작업1",
                complete: false,
                important: false,
            }
        ],
        todoCount: 1,
        completeCount: 0
    },
    {
        taskId: 2,
        type: "task",
        title: "테스트",
        date: new Date().toLocaleTimeString(),
        todos: [
            {
                taskId: 2,
                todoId: 0,
                do: "작업1",
                complete: false,
                important: false,
            },
            {
                taskId: 2,
                todoId: 1,
                do: "작업1",
                complete: false,
                important: false,
            }
        ],
        todoCount: 2,
        completeCount: 0
    }
];

function App() {
    const [taskId, setTaskId] = useState(0);
    const [tasks, setTask] = useState(initialTasks);
    const taskCount = tasks.length;

    const onTaskClick = (taskId) => {
        setTaskId(taskId);
    };

    const onTaskAdd = (taskTitle) => {
        const temp = {
            taskId: taskCount,
            type: "task",
            title: taskTitle,
            date: new Date().toLocaleTimeString(),
            todos: [],
            todoCount: 0
        };
        setTask(tasks.concat(temp));
    };

    const onToDoAdd = (taskId, text) => {
        let count = tasks.find((t) => t.taskId === taskId).todoCount;
        const todo = {
            todoId: count,
            do: text,
            complete: false,
            important: false,
        };

        setTask(
            tasks.map((t) => {
                return t.taskId === taskId ? { ...t, todos: t.todos.concat(todo), todoCount: ++count } : t;
            })
        );
    };

    const onToDoDelete = (taskId, todoId) => {
        setTask(
            tasks.map((t) => {
                return t.taskId === taskId ? { ...t, todos: t.todos.filter((todo) => todo.todoId !== todoId) } : t;
            })
        );
    };

    const onToDoEdit = (todoId, text) => {
        setTask(tasks.map((task) => {
            return task.taskId === taskId ? {
                ...task, todos: task.todos.map((todo) => {
                    return todo.todoId === todoId ? { ...todo, do: text } : todo
                })
            } : task
        }));
    };

    const onToDoComplete = (taskId, todoId) => {
        // const tempTask = task.find((t) => t.taskId === taskId);
        // tempTask.todos.progress = tempTask.todos.progress.filter((work) => todo.todoId !== work.todoId);
        // tempTask.todos.complete = tempTask.todos.complete.concat(todo);

        setTask(
            tasks.map((t) => {
                return t.taskId === taskId ? {
                    ...t,
                    todos: t.todos.map((todo) => {
                        return todo.todoId === todoId ? { ...todo, complete: true } : todo
                    }),
                    completeCount: ++t.completeCount
                } : t;
            })
        );
    };

    const onToDoImportant = (taskId, importantTodo) => {

        let tempTask = tasks.find((task) => task.taskId === 1);
        const tempTodo = tempTask && tempTask.todos.find((todo) => todo.taskId === importantTodo.taskId && todo.todoId === importantTodo.todoId)

        if (tempTask != null && tempTodo == null) {
            const todo = {
                ...importantTodo,
                important: !importantTodo.important
            };
            tempTask.todos = tempTask.todos.concat(todo);
        }
        else {
            tempTask.todos = tempTask.todos.filter((todo) => {
                return todo.taskId === importantTodo.taskId && todo.todoId !== importantTodo.todoId
            });
        }

        setTask(tasks.map((task) => {
            if (task.taskId === 1) {
                return { ...tempTask };
            }
            else if (task.taskId === taskId) {
                return {
                    ...task,
                    todos: task.todos.map((todo) => {
                        return todo.todoId === importantTodo.todoId ? { ...todo, important: !todo.important } : todo
                    })
                };
            }
            else {
                return task;
            }
            // return task.taskId === 1 ? { ...tempTask } : task
        }));
        setTask(tasks.map((task) => {
            return task.taskId === importantTodo.taskId ? {
                ...task,
                todos: task.todos.map((todo) => {
                    return todo.todoId === importantTodo.todoId ? { ...todo, important: !todo.important } : todo
                })
            } : task
        }))
    }

    return (
        <>
            <Container>
                <NavigaionBar taskId={taskId} tasks={tasks} onTaskClick={onTaskClick} onTaskAdd={onTaskAdd} />
                <Content
                    taskId={taskId}
                    task={tasks.find((task) => task.taskId === taskId)}
                    onToDoEdit={onToDoEdit}
                    onToDoAdd={onToDoAdd}
                    onToDoDelete={onToDoDelete}
                    onToDoComplete={onToDoComplete}
                    onToDoImportant={onToDoImportant}
                />
            </Container>
        </>
    );
}

export default App;
