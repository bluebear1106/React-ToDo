import './App.css';
import NavigaionBar from './components/NavigationBar';
import styled from 'styled-components';
import Content from './components/Content';
import { useState } from 'react';

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
        }
    ]
};

const tasks = [
    {
        todoId: 0,
        title: "테스트",
        date: new Date().toLocaleTimeString(),
        todo: [
            {
                task: "작업1",
                state: false
            },
            {
                task: "작업1",
                state: false
            }
        ]
    },
    {
        todoId: 1,
        title: "테스트2",
        date: new Date().toLocaleTimeString(),
        todo: [
            {
                task: "작업2",
                state: false
            },
            {
                task: "작업2",
                state: false
            }
        ]
    }
];


function App() {
    const [menu, setMenu] = useState(menus);
    const [task, setTask] = useState(tasks);

    const menuClick = (menuId) => {
        setMenu({ ...menus, menuId: menuId });
    };

    const onTaskAdd = (taskTitle) => {
        const temp = {
            todoId: 2,
            title: taskTitle,
            date: new Date().toLocaleTimeString(),
            todo: [

            ]
        }
        setTask(task.concat(temp));
    }

    return (
        <>
            <Container>
                <NavigaionBar menus={menu} tasks={task} menuClick={menuClick} onTaskAdd={onTaskAdd} />
                <Content />
            </Container>
        </>
    );
}

export default App;
