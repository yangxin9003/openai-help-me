import './options.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import OptionsPanel from './options-ui/panel'

// Render your React component instead
const root = createRoot(document.body);
root.render(<OptionsPanel/>);
