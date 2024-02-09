import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios"
import { SERVER_ACCESS_URL } from '../constans'

function ReadParticularData() 
{
    //Extract that ID

    const [ particularStudentData, setParticularStudentData ] = React.useState([])

    const { id } = useParams()
    
    React.useEffect(function()
    {
        Axios.get(`${SERVER_ACCESS_URL}/read/data/${id}`)
        .then(function(output)
        {
            setParticularStudentData(output.data)
        }).catch(function(error)
        {
            console.log(error)
        })
    })
    
    return (
        <div>
            {
                particularStudentData.map(function(i)
                {
                    return (
                        <div style={{ 
                          border: '1px solid #ccc',
                          borderRadius: '8px',
                          padding: '15px',
                          margin: '10px',
                          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                          backgroundColor: '#f8f8f8'
                        }}>
                          <div style={{ marginBottom: '10px' }}>
                            <label style={{ color: '#666', marginRight: '10px' }}>Roll No:</label>
                            <span style={{ color: '#333' }}>{i.rollNo}</span>
                          </div>
                          <div style={{ marginBottom: '10px' }}>
                            <label style={{ color: '#666', marginRight: '10px' }}>Name:</label>
                            <span style={{ color: '#1a1a1a' }}>{i.name}</span>
                          </div>
                          <div style={{ marginBottom: '10px' }}>
                            <label style={{ color: '#666', marginRight: '10px' }}>Age:</label>
                            <span style={{ color: '#555' }}>{i.age}</span>
                          </div>
                          <div>
                            <label style={{ color: '#666', marginRight: '10px' }}>City:</label>
                            <span style={{ color: '#444' }}>{i.city}</span>
                          </div>
                        </div>
                      );
                })
            }
        </div>
    )
}

export default ReadParticularData