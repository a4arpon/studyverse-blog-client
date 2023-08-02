import { Link } from 'react-router-dom'

const NavItems = () => {
  return (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/blogs'}>Blogs</Link>
      </li>
      <li>
        <Link to={'/my-posts'}>My Posts</Link>
      </li>
    </>
  )
}
const Navbar = () => {
  return (
    <nav className="bg-base-200 sticky top-0 z-10 bg-opacity-60">
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
          <a className="btn btn-neutral">Login</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
