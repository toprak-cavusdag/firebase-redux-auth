import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const emailValueHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordValueHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    try {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      dispatch(setUser(email));
    } catch (err) {
      console.log('Error from Sign In', err);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={submitHandler} className='sign-section'>
        <h2 style={{ textAlign: 'center' }}>Sign In </h2>

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
          didn't you register? <a href='/sign-up'>sign up</a>
        </p>

        <button type='submit' className='sign-btn'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
