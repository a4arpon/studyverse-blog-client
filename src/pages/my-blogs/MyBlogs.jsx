import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
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
    fetch(`${import.meta.env.VITE_SERVER_URL}/blogs/my-blogs/${user?.email}`)
      .then((res) => res.json())
      .then((res) => setBlogs(res))
    return () => setBlogs([])
  }, [])
  console.log(blogs)
  return (
    <>
      <Helmet>
        <title>My Blogs | StudyVerse</title>
      </Helmet>
      <main className="container mx-auto p-2 lg:px-0 py-10">
        <div className="flex flex-col gap-2">
          {blogs &&
            blogs.map((blog) => <BlogListItem key={blog?._id} blog={blog} />)}
        </div>
      </main>
    </>
  )
}

export default MyBlogs
