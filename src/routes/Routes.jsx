import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Login from '../pages/auth/login/Login'
import Register from '../pages/auth/register/Register'
import Blog from '../pages/blog/Blog'
import Blogs from '../pages/blogs/Blogs'
import Editor from '../pages/editor/Editor'
import Updater from '../pages/editor/Updater'
import Home from '../pages/home/Home'
import MyBlogs from '../pages/my-blogs/MyBlogs'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/blogs/:blogID',
        element: <Blog />,
      },
      {
        path: '/my-posts',
        element: <MyBlogs />,
      },
      {
        path: '/editor',
        element: <Editor />,
      },
      {
        path: '/editor/:postID',
        element: <Updater />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])
export default Routes
