import { lazy, useState } from 'react';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { getCurrentUserThunk } from 'redux/auth/authOperations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import UserMenu from './UserMenu/UserMenu';

import { Box, Container } from '@mui/material';
import bg from '../bg/Petals-PNG-Picture.png';
const HomePage = lazy(() => import('../views/HomePage'));
const RegisterPage = lazy(() => import('../views/RegisterPage'));
const LogInPage = lazy(() => import('../views/LogInPage'));
const ContactsPage = lazy(() => import('../views/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedIn);
  const [img] = useState(bg);
  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        background:
          'linear-gradient(158deg, rgba(111,177,178,1) 0%, rgba(65,90,98,1) 53%, rgba(145,132,144,1) 100%)',
      }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundImage: `url(${img})`,
        }}
      >
        {isLoggedIn && <UserMenu />}

        <Routes>
          <Route
            path="/"
            element={<PublicRoute component={HomePage} restricted />}
          />
          <Route
            path="/register"
            element={<PublicRoute component={RegisterPage} restricted />}
          />
          <Route
            path="/login"
            element={<PublicRoute component={LogInPage} restricted />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
    </Container>
  );
};

export default App;
