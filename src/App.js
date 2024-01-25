 
import './App.css';

import { Button, Container, Row ,Col} from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourse from './components/Allcourses';
import AddCourse from './components/Addcourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes }from "react-router-dom";
function App() {
  const btnHandle =()=>
  {
     toast.success("Hello Mutturaj",{
      position:'top-center'
     });
  };
  return(
    <div>
     <Router>
     <ToastContainer/>
     <Container>
      <Header/>
       <Row>
         <Col md={4}>
          <Menus/>
          </Col>
           <Col md={8}>
            <Routes>
              <Route path="/" Component={Home} exact/>
              <Route path="/add-course" Component={AddCourse}/>
              <Route path="/view-courses" Component={Allcourse}/>
            </Routes>
          
          </Col>
       </Row>
    </Container>
     </Router>
    </div>
  );
};
export default App;
