import { ContactsPage } from 'Pages/Contacts/ContactsPage';
import { HomePage } from 'Pages/HomePage/HomePage';
import { LoginPage } from 'Pages/Login/LoginPage';
import { RegisterPage } from 'Pages/Register/RegisterPage';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigatoin/Navigation';

export const App = () => {
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
