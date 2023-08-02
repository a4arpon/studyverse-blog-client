import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Blog from '../pages/blog/Blog'
import Blogs from '../pages/blogs/Blogs'
import Home from '../pages/home/Home'

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
    ],
  },
])
export default Routes
