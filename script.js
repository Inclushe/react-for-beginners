import React from 'react';
import Router from './src/components/Router'
import { createRoot } from 'react-dom/client'

const container = document.querySelector('#main');
const root = createRoot(container);

root.render(<Router />);
