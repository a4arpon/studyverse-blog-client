import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Blog from '../pages/blog/Blog'
import Blogs from '../pages/blogs/Blogs'
import Editor from '../pages/editor/Editor'
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
    ],
  },
])
export default Routes
