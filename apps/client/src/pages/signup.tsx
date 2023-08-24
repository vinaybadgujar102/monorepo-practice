import React from 'react'
import Signup from 'ui/components/Signup';
import axios from 'axios';

const signup = () => {
  return (
    <div>
      <Signup onClick = {async (username, password) => {
        const response = await axios.post("/api/signup", {
          username,
          password
        })
        localStorage.setItem("token", response.data.token)
      }}/>
    </div>
  )
}

export default signup;
