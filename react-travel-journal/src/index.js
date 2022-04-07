import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// this is the new syntax per the React 18 documentation
const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />)