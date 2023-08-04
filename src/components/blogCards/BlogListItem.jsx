import { BsFillArrowUpRightSquareFill, BsTrash3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { dateFormat } from '../../utils/dateFormat'
const BlogListItem = ({ blog, deleteBlogs }) => {
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
        <h1 className="text-2xl truncate font-semibold">{title}</h1>
        <p>
          <strong>Published At : </strong> {dateFormat(publishedAt)}
        </p>
        <div className="mt-3 flex gap-3">
          <Link to={`/blogs/${_id}`} className="btn btn-neutral">
            <BsFillArrowUpRightSquareFill size={24} /> View Post
          </Link>
          <Link to={`/editor/${_id}`} className="btn btn-warning">
            <BsFillArrowUpRightSquareFill size={24} /> Edit Post
          </Link>
          <button className="btn btn-error" onClick={() => deleteBlogs(_id)}>
            <BsTrash3 size={24} /> Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogListItem
