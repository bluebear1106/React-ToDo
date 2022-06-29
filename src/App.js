import logo from './logo.svg';
import './App.css';
import ToDoHeader from './components/ToDoHeader';
import NavigaionBar from './components/NavigationBar';
import styled from 'styled-components';
import Content from './components/Content';
import StyledContent from './components/Content';

const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`;

function App() {
    return (
        <>
            <Container>
                <NavigaionBar />
                <Content />
            </Container>
        </>
    );
}

export default App;
