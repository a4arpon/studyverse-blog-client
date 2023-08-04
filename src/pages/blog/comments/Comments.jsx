import { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import AddComments from './AddComments'
import Comment from './Comment'

const Comments = ({ blogID }) => {
  const { user, loading } = useAuth()
  const [commentsCollection, setCommentsCollection] = useState([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/comments/${blogID}`)
      .then((res) => res.json())
      .then((res) => setCommentsCollection(res))
    return () => {
      setCommentsCollection([])
    }
  }, [])

  console.log(commentsCollection)
  return (
    <section id="comments">
      <h3 className="mb-3 pb-3 border-b-2">Comments</h3>
      {user && !loading && <AddComments blogID={blogID} />}
      <div className="flex flex-col gap-3">
        {commentsCollection &&
          commentsCollection.map((item) => (
            <Comment key={item?._id} commentItem={item} />
          ))}
      </div>
    </section>
  )
}

export default Comments
