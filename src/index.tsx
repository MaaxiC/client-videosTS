import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';
import Navbar from './components/Navbar/Navbar';
import 'bootswatch/dist/lux/bootstrap.min.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <div className="container p-4">
        <Routes>
          <Route path='/' element={<VideoList/>} />
          <Route path='/new-video' element={<VideoForm/>} />
          <Route path='/update/:id' element={<VideoForm/>} />
          <Route path='*' element={ "Not Found" } />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();