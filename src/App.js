import logo from './logo.svg';
import './App.css';
import ToDoHeader from './components/ToDoHeader';
import NavigaionBar from './components/NavigationBar';
import styled from 'styled-components';
import Content from './components/Content';
import StyledContent from './components/Content';

const Container = styled.div`
    display: flex;
`;

function App() {
    return (
        <div>
            <Container>
                <NavigaionBar />
                <Content>
                    <ToDoHeader />
                </Content>
            </Container>
        </div>
    );
}

export default App;
