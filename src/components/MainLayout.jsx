import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div>
      <header>
        {/* Application Header - Could include navigation */}
        <h1>Matrix Training Program</h1>
      </header>
      <main>
        <Outlet /> {/* This is where the child routes will render */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;