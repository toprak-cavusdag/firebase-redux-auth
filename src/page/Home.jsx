import React from 'react';

const Home = ({ user }) => {
  let userProfile = user.charAt(0);
  return (
    <div className='home'>
      <div className='user-profile'>{userProfile}</div>
      <h2>You're sign in with {user}</h2>
    </div>
  );
};

export default Home;
