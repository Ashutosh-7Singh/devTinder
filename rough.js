import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: 'connection',
    initialState: null,
    reducers: {
        addConnections: (state, action) => action.payload,
        removeConnections: (state, action) => null
    }
})
export const { addConnections, removeConnections } = connectionSlice.actions
export default connectionSlice.reducer

and 
import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionsSclice'

const Connections = () => {
  const connections = useSelector((store) => store.connections)
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + '/user/connection', {
        withCredentials: true,
      })
      dispatch(addConnections(res?.data?.Data))
      console.log("data", res?.data?.Data);

    } catch (error) {
      // Handle Error Case
    }
  }
  useEffect(() => {
    fetchConnections()
  }, [])

  if (!connections) return;
  if (connections.length === 0) return <h1>No Connections found</h1>
  return (
    <div className='text-center  my-10'>
      <h1 className='text-2xl text-bold'>Connections</h1>
      {connections.map((connection) => {
        const { firstName, lastName, photoUrl, age, gender, about, skills } = connection

        return (
          <div className='m-4 p-4 border rounded-lg border-base'>
            <img alt='photo' className="w-20 h-20" src={photoUrl} />
            <h2>{firstName + " " + lastName}</h2>
            <p>{about}</p>

          </div>
        )
      }

      )}
    </div>

  )
}

export default Connections
and this is the response in the network ->
{
    "message": "Coneccction found Sucessfull",
    "Data": [
        {
            "_id": "686505f508f545ce1b10f2eb",
            "firstName": "Trup",
            "lastName": "Singh",
            "skills": [
                "javascript",
                "java",
                "react"
            ],
            "photoUrl": "https://images.unsplash.com/photo-1665923148259-3340e61d3ff2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "about": "This is default about of the user",
            "age": 24,
            "gender": "female"
        }
    ]
}
      console.log("data", res?.data?.Data);
and for this ->

react-dom_client.js?v=0d3b36f1:17987 Download the React DevTools for a better development experience: https://react.dev/link/react-devtools
Connections.jsx:16 data [{…}]0: about: "This is default about of the user"age: 24firstName: "Trup"gender: "female"lastName: "Singh"photoUrl: "https://images.unsplash.com/photo-1665923148259-3340e61d3ff2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"skills: (3) ['javascript', 'java', 'react']_id: "686505f508f545ce1b10f2eb"[[Prototype]]: Objectlength: 1[[Prototype]]: Array(0)
connections:1 Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received

but on the Connections. compoenent page nothing is coming 
at least these should be visible ->
  <img alt='photo' className="w-20 h-20" src={photoUrl} />
            <h2>{firstName + " " + lastName}</h2>
            <p>{about}</p>