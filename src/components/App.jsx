// import { ContactsPage } from 'Pages/Contacts/ContactsPage';
// import { HomePage } from 'Pages/HomePage/HomePage';
// import { LoginPage } from 'Pages/Login/LoginPage';
// import { RegisterPage } from 'Pages/Register/RegisterPage';
import { useEffect, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'Redux/authOperations';
import { Navigation } from './Navigation';
import { PrivateRoute } from './PrivateRout';
import { RestrictedRoute } from './RestrictedRout';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('Pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('Pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<HomePage />}
              />
            }
          ></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          ></Route>
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          ></Route>
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
