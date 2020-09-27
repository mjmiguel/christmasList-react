import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'node-fetch';

const Login = (props) => {
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState(false);
  const [lenValidation, setLenValidation] = useState(true);

  useEffect(() => {

  }, [lenValidation]);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (process.env !== 'test') {
      if (password.length > 0) {
        setLenValidation(true);
        console.log('form submitted!');
        // send fetch
        // set validation
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        };
        fetch('/auth/login', options)
          .then()
          .then()
          .catch((error) => {
            console.log('Error in Login.fetch: ', error);
          });
      } else {
        // render some text validation
        setLenValidation(false);
        console.log('length too short');
      }
    }
  };

  return (
    <div>
      <form onSubmit={(e) => { handleSubmit(e); }}>
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          type="password"
          id="login-password"
          name="login-password"
          onChange={(e) => { handleChange(e); }}
        />
        {lenValidation ? null : <div>probably not a valid password</div>}
        <input 
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Login;
