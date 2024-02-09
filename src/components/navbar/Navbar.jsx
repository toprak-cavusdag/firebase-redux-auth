import React from 'react';
import './navbar.css';
import { IoLogoFirebase } from 'react-icons/io5';
import { TbBrandRedux } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/user/userSlice';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user.email);

  return (
    <nav className='navbar'>
      <div className='logo'>
        <span className='title'>
          <IoLogoFirebase /> Firebase
        </span>
        <span className='title'>
          <TbBrandRedux /> Redux
        </span>
      </div>

      {userState && (
        <button className='navbar-btn' onClick={() => dispatch(logOut())}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
