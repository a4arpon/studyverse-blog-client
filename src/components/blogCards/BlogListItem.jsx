import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const BlogListItem = ({ blog }) => {
  const { title, publishedAt, thumbnail, _id } = blog || {}
  return (
    <div className="bg-base-200 p-3 lg:p-5 rounded-lg flex flex-col gap-2 lg:flex-row items-center">
      <img
        src={
          thumbnail ||
          'https://i.pinimg.com/564x/5b/ac/02/5bac02a523df792c7e4e2fa6be49c354.jpg'
        }
        alt=""
        className="h-24 rounded-lg hidden lg:inline"
      />
      <div>
        <h1 className="text-lg truncate font-semibold">{title}</h1>
        <p>
          <strong>Published At : </strong> {publishedAt}
        </p>
        <div className="mt-3 flex gap-3">
          <Link to={`/blogs/${_id}`} className="btn btn-neutral">
            <BsFillArrowUpRightSquareFill size={24} /> View Post
          </Link>
          <Link to={`/blogs/${_id}`} className="btn btn-warning">
            <BsFillArrowUpRightSquareFill size={24} /> Edit Post
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogListItem
