import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Register = () => {
  const { registerUser, signInGoogle, updateUser, user } = useAuth()
  const navigator = useNavigate()
  useEffect(() => {
    if (user) {
      navigator('/')
    }
  }, [user])

  const handleEmailSignup = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    if (/^(?=.*\d)(?=.*[a-z]).{6,20}$/.test(password)) {
      registerUser(email, password)
        .then((res) => {
          updateUser(name)
          toast.success('Registration Successful')
        })
        .catch((err) => {
          toast.error(err.message)
        })
    } else {
      toast.error(
        'Password must be more than 6 chars, Contain alphabetic and numeric chars'
      )
    }
  }
  const handleAuthWithGoogle = () => {
    signInGoogle().catch((err) => {
      toast.error(err.message)
    })
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6 text-xl">
            To contribute your knowledge with others.
          </p>
        </div>
        <div className="lg:w-1/2 card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleEmailSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email Here"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email Here"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Set Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Password Here"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="mt-4">
                <p>
                  Already have an account?{' '}
                  <Link to="/login" className="link font-semibold">
                    Login Now
                  </Link>
                </p>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-neutral font-bold" type="submit">
                  Register
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="mb-2">
              <button
                className="btn bg-blue-500 hover:bg-blue-600 border-none w-full text-white font-bold"
                onClick={handleAuthWithGoogle}
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
