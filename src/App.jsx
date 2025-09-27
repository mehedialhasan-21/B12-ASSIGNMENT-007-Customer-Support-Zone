import React from 'react';
import MainLayout from './layouts/MainLayout/MainLayout';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <MainLayout />

      {/* React Toastify Rendering */}
      <ToastContainer />
    </>
  );
};

export default App;
