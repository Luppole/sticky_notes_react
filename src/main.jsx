import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Posts.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import Posts, { loader as postsLoader} from '/src/routes/Posts.jsx'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, 
    children: [
      { 
        path: '/',
        element: <App />, 
        loader: postsLoader,
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
