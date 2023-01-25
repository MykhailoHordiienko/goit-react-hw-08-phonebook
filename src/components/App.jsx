import { ContactsPage } from 'Pages/Contacts/ContactsPage';
import { LoginPage } from 'Pages/Login/LoginPage';
import { RegisterPage } from 'Pages/Register/RegisterPage';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigatoin/Navigation';

export const App = () => {
  return (
    <div
    //   style={{
    //     // height: '100vh',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //     padding: 20,
    //   }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="contacts" element={<ContactsPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
