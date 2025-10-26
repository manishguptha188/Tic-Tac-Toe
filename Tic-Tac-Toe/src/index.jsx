import React from 'react';
import { createRoot } from 'react-dom/client';
import Board from './App';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(<Board />);
