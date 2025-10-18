import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home.jsx'
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import PrivateRoute from "./PrivateRoute.jsx";
import NotFound from './components/NotFound.jsx';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false}
        newestOnTop={false} closeOnClick pauseOnHover theme="colored" />
    </div>
  );
}
