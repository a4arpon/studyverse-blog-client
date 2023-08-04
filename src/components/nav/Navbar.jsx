import {
  BsHouse,
  BsPersonCircle,
  BsPlusSquare,
  BsPower,
  BsReverseLayoutTextSidebarReverse
} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
const NavItems = () => {
  const { user } = useAuth()
  return (
    <>
      <li>
        <Link to={'/'}>
          <BsHouse size={16} /> Home
        </Link>
      </li>
      <li>
        <Link to={'/blogs'}>
          <BsReverseLayoutTextSidebarReverse size={16} /> Blogs
        </Link>
      </li>
      {user && (
        <>
          <li>
            <Link to={'/my-posts'}>
              <BsPersonCircle size={16} /> My Posts
            </Link>
          </li>
          <li>
            <Link to={'/editor'}>
              <BsPlusSquare size={16} /> Post Now
            </Link>
          </li>
        </>
      )}
    </>
  )
}
const Navbar = () => {
  const { user, logout } = useAuth()
  return (
    <nav className="bg-base-300 sticky top-0 z-10 bg-opacity-90">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
            >
              <NavItems />
            </ul>
          </div>
          <Link to={'/'} className="uppercase font-semibold text-2xl">
            StudyVerse
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <NavItems />
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button className="btn btn-error" onClick={() => logout()}>
              <BsPower size={22} /> Logout
            </button>
          ) : (
            <Link to={'/login'} className="btn btn-neutral">
              <BsPower size={22} /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
