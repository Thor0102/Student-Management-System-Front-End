import React from 'react'
import Axios from "axios"
import { useParams } from 'react-router-dom'
import { SERVER_ACCESS_URL } from '../constans'

function DeleteParticularData() {

    // logic to extract the rollNo

    const [message , setMessage]  = React.useState("")

    const { id } = useParams()

    // import Axios from axios 
    Axios.delete(`${SERVER_ACCESS_URL}/delete/data/${id}`)
    .then(function(output){
        setMessage(output.data)
    })
    .catch(function(error){
        console.log(error)
    })
  return (
    <div>{message}</div>
  )
}

export default DeleteParticularData