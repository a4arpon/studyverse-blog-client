import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import BlogCard from '../../components/blogCards/BlogCard'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/blogs`)
      .then((res) => res.json())
      .then((res) => setBlogs(res))
    return () => setBlogs([])
  }, [])

  return (
    <>
      <Helmet>
        <title>Blogs | StudyVerse</title>
      </Helmet>
      <main className="container mx-auto p-2 lg:px-0">
        <div className="grid lg:grid-cols-4 gap-2 my-11">
          {blogs &&
            blogs.map((blog) => <BlogCard key={blog?._id} blog={blog} />)}
        </div>
      </main>
    </>
  )
}

export default Blogs
