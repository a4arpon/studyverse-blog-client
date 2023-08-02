import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const { title, author, publishedAt, thumbnail, _id } = blog || {}
  return (
    <Link
      to={`/blogs/${_id}`}
      className="card card-compact bg-base-200"
      title={title}
    >
      <figure>
        <img
          src={
            'https://i.pinimg.com/564x/5b/ac/02/5bac02a523df792c7e4e2fa6be49c354.jpg'
          }
          alt={title + ' Thumbnail Image'}
          className="h-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div>
          <p className="text-lg">
            <strong>Published At: </strong>
            {publishedAt}
          </p>
          <p className="text-lg">
            <strong>Author: </strong>
            {author}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
