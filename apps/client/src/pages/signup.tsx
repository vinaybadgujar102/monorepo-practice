import React from 'react'
import Signup from 'ui/components/Signup';

const signup = () => {
  return (
    <div>
      <Signup onClick = {(username, password) => {
        alert(username);
        alert(password);
      }}/>
    </div>
  )
}

export default signup;
