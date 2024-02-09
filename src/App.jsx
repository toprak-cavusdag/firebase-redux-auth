import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './page/Home';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';

import { useSelector, useDispatch } from 'react-redux';
import { checkUser } from './features/user/userSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  const userState = useSelector((state) => state.user.email);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {userState && (
            <>
              <Route index element={<Home user={userState} />} />
              <Route path='*' element={<Home user={userState} />} />
            </>
          )}
          {!userState && (
            <>
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='*' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
