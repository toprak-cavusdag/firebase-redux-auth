import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValueHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordValueHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    try {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log('Error from Sign Up', err);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={submitHandler} className='sign-section'>
        <h2 style={{ textAlign: 'center' }}>Sign Up </h2>

        <input
          onChange={(e) => emailValueHandler(e)}
          value={email}
          className='styled-input'
          type='email'
          placeholder='exams@exam2432r.com'
        />
        <input
          value={password}
          onChange={(e) => passwordValueHandler(e)}
          className='styled-input'
          type='password'
          placeholder='your password...'
        />

        <p className='desc-router'>
          you are already a member, <a href='/sign-in'>sign in</a>
        </p>

        <button type='submit' className='sign-btn'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
