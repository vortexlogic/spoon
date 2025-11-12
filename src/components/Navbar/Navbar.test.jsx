import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Required for Link components
import Navbar from './Navbar';

describe('Navbar Component', () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/