import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/nav/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
