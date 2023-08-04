import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import BlogListItem from '../../components/blogCards/BlogListItem'
import useAuth from '../../hooks/useAuth'

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([])
  const { user, loading } = useAuth()
  const navigator = useNavigate()
  useEffect(() => {
    if (!user && !loading) {
      navigator('/')
    }
  }, [user])
  useEffect(() => {
    if (user) {
      fetch(`${import.meta.env.VITE_SERVER_URL}/blogs/my-blogs/${user?.email}`)
        .then((res) => res.json())
        .then((res) => setBlogs(res))
      return () => setBlogs([])
    }
  }, [user])
  const deleteBlogs = (_id) => {
    if (confirm('Are you sure to do it?') == true) {
      fetch(`${import.meta.env.VITE_SERVER_URL}/blogs/${_id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((res) => {
          fetch(
            `${import.meta.env.VITE_SERVER_URL}/blogs/my-blogs/${user?.email}`
          )
            .then((res) => res.json())
            .then((res) => {
              setBlogs(res)
              toast.success('Delete Successful.')
            })
        })
    }
  }
  return (
    <>
      <Helmet>
        <title>My Blogs | StudyVerse</title>
      </Helmet>
      <main className="container mx-auto p-2 lg:px-0 py-10 min-h-screen">
        <div className="flex flex-col gap-2">
          {blogs &&
            blogs.map((blog) => (
              <BlogListItem
                key={blog?._id}
                blog={blog}
                deleteBlogs={deleteBlogs}
              />
            ))}
        </div>
      </main>
    </>
  )
}

export default MyBlogs
