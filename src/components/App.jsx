import { ContactsPage } from 'Pages/Contacts/ContactsPage';
import { HomePage } from 'Pages/HomePage/HomePage';
import { LoginPage } from 'Pages/Login/LoginPage';
import { RegisterPage } from 'Pages/Register/RegisterPage';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'Redux/authOperations';
import { Navigation } from './Navigatoin/Navigation';

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
          <Route index element={<HomePage />}></Route>
          <Route path="contacts" element={<ContactsPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};
