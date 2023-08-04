import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { dateFormat } from '../../utils/dateFormat'
import Comments from './comments/Comments'

const Blog = () => {
  const { blogID } = useParams()
  const [blogItem, setBlogItem] = useState({})
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/blogs/${blogID}`)
      .then((res) => res.json())
      .then((result) => setBlogItem(result))
    return () => {
      setBlogItem({})
    }
  }, [])

  const { title, blog, publishedAt, author, thumbnail } = blogItem
  return (
    <>
      <Helmet>
        <title>{`${title}`} | StudyVerse</title>
      </Helmet>
      <main className="container mx-auto p-2 lg:px-0 min-h-screen py-10 flex gap-3 justify-between flex-col lg:flex-row">
        <article className="bg-base-200 p-5 rounded-lg lg:w-3/5 remove-tailwind-styles">
          <div className=" border-b-2 pb-2 mb-3">
            <h1 className="text-2xl">{title}</h1>
            <p>
              <strong>Publisher : </strong> {author}
            </p>
            <p>
              <strong>Publishing Date : </strong> {dateFormat(publishedAt)}
            </p>
          </div>
          <div className="flex justify-center border-b-2 mb-3 pb-2">
            <img
              src={
                thumbnail ||
                'https://i.pinimg.com/564x/5b/ac/02/5bac02a523df792c7e4e2fa6be49c354.jpg'
              }
              alt=""
              className="w-full lg:max-w-lg rounded-lg "
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: blog }}
            className="blog"
          ></div>
        </article>
        <div className="lg:w-2/5">
          <Comments blogID={blogID} />
        </div>
      </main>
    </>
  )
}

export default Blog
