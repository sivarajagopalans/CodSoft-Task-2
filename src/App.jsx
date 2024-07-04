import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { AddTask } from './components/AddTask'
import { Navbar } from './components/Navbar'
import { TasksList } from './components/TasksList';

function App() {

  return (
    <>
      <Container>
        <Navbar />
        <Row className='justify-content-center'>
          <Col lg={7} md={9} xl={8} >
            <AddTask />
            <TasksList />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
