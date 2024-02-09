import React from 'react'
import "./AddStudentForm.css"
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { SERVER_ACCESS_URL } from '../constans'

function EditStudentData() {

   //const [ data , setData] =  React.useState("")

   const [myRollNo, setRollNo] = React.useState("")
   const [myName, setName] = React.useState("")
   const [myAge, setAge] = React.useState("")
   const [myCity, setCity] = React.useState("")



    // logic to get the student data 
    const { id } = useParams()//id= 1

    Axios.get(`${SERVER_ACCESS_URL}/read/data/${id}`)
    .then(function(output){
        output.data.map(function(i){
            setRollNo(i.rollNo)
            setName(i.name)
            setAge(i.age)
            setCity(i.city)
        })
       // setData(output.data)
    })
    .catch(function(error){
        console.log(error)
    })



  return (
    <div >
        <h4>Student Edit Form</h4>
        <div className='row'>
            <div className='col-md-6'>

            <form >
                <label for="rollNo">Roll Number:</label>
                <input type="text" id="rollNo" name="rollNo" value={myRollNo} />

                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value={myName}/>

                <label for="age">Age:</label>
                <input type="number" id="age" name="age" value={myAge}/>

                <label for="city">City:</label>
                <input type="text" id="city" name="city" value={myCity}/>

                <input type="submit" value="Update"/>
            
            </form>
            
            </div>
        </div> 
    </div>
  )
}

export default EditStudentData
