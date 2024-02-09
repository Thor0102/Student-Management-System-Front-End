import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import React from "react"
import AddStudentForm from './components/AddStudentForm';
import{BrowserRouter, Link, Route, Routes} from"react-router-dom"
import ReadStudentData from './components/ReadStudentData';
import ReadParticularData from './components/ReadParicularData';
import DeleteParticularData from './components/DeleteParticularData';
import EditStudentData from './components/EditStudentData';

function App() {

  return (

    <div>

      <BrowserRouter>
        <Link to="/add"> Add Student</Link>
        <Link to="/students"> View Student</Link>

        <Routes>
          <Route path="/add" element={<AddStudentForm/>}></Route>
          <Route path="/students" element={<ReadStudentData/>}>
            <Route path=":id" element={<ReadParticularData/>}></Route>
            <Route path="delete/:id" element={<DeleteParticularData/>}></Route>
            <Route path="edit/:id" element={<EditStudentData/>}></Route>
          </Route>
          
        </Routes>
     
     
      </BrowserRouter>
 
    </div> 
   
  );
}

export default App;
