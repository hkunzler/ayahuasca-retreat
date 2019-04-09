import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AdminProvider from './context/AdminProvider'
import PostProvider from './context/PostProvider'

ReactDOM.render(
  <BrowserRouter>
    <AdminProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </AdminProvider>
  </BrowserRouter>,
  document.getElementById("root")
);