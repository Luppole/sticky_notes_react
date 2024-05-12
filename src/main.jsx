import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Posts.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import Post from '/src/routes/Posts.jsx'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, 
    children: [
      { 
        path: '/',
        element: <App />, 
        children: [{ path: '/create-post', element: <NewPost />}],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
