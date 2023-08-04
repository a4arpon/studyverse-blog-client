const Comment = ({ commentItem }) => {
  return (
    <div className="bg-base-200 p-5 rounded-lg">
      <p>{commentItem?.comment}</p>
      <h6 className="text-sm">Author : {commentItem?.author}</h6>
    </div>
  )
}

export default Comment
