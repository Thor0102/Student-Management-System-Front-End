import React from 'react'
import Axios from "axios"
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import "./ReadParicularData"
import { SERVER_ACCESS_URL } from '../constans'

function ReadStudentData() 
{
    // Connect to Backend --> give you the output --> collect it --> display
    // connect to localhost:9000/read

   const [ completeReadData, setCompleteReadData ] = React.useState([])

    React.useEffect(function()
    {
        //Axios to make an api call to the server
        Axios.get(`${SERVER_ACCESS_URL}/read`).then(function(output)
        {
            setCompleteReadData(output.data)
        }).catch(function(error)
        {
            console.log(error)
        })
    })


  return (
    <div className='row'>
        <div className='col-md-6'>
            <table className="table table-success table-striped-columns table-hover">
                <thead>
                    <th>STUDENT NAME</th>
                    <th>ACTION</th>
                    <th>ACTION</th>
                    <th>ACTION</th>
                </thead>
            
               <tbody>
               {
                   completeReadData.map(function(i)
                   {
                       return  <tr>
                        
                        <td>{i.name}</td>
                        <td><Link className='btn btn-outline-primary' to={`/students/${i.rollNo}`}>View</Link></td>
                        <td><Link className='btn btn-outline-success' to={`/students/edit/${i.rollNo}`}>Edit</Link></td>
                        <td><Link className='btn btn-outline-danger' to={`/students/delete/${i.rollNo}`}>Delete</Link></td>
                        </tr>

                    })
                }
               </tbody>
            </table>

            <Outlet/>
        </div>
        
    </div>
  )
}

export default ReadStudentData