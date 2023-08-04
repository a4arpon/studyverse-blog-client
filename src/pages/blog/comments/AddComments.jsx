import toast from 'react-hot-toast'
import useAuth from '../../../hooks/useAuth'

const AddComments = ({ blogID, setRefetch }) => {
  const { user } = useAuth()
  const commentsAddHandler = () => {
    const commentsPacket = {
      blogID,
      author: user?.displayName,
      comment: document.getElementById('commentText').value || null,
    }
    fetch(`${import.meta.env.VITE_SERVER_URL}/comments`, {
      method: 'POST',
      body: JSON.stringify(commentsPacket),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        document.getElementById('commentText').value = ''
        toast.success('Comment added on post.')
        setRefetch(true)
      })
  }
  return (
    <div className="bg-base-200 p-5 rounded-lg">
      <h4 className="mb-2">Add Comment</h4>
      <textarea
        className="textarea textarea-bordered w-full"
        id="commentText"
      ></textarea>
      <div className="flex justify-end">
        <button
          type="submit"
          className="btn btn-neutral"
          onClick={() => commentsAddHandler()}
        >
          Post Comment
        </button>
      </div>
    </div>
  )
}

export default AddComments
