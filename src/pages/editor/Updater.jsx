import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
const Updater = () => {
  const [formValue, setFormValueValue] = useState('')
  const { register, handleSubmit } = useForm()
  const { postID } = useParams()
  const [blogItem, setBlogItem] = useState({})
  const { user, loading } = useAuth()
  const navigator = useNavigate()
  useEffect(() => {
    if (!user && !loading) {
      navigator('/')
    } else if (user) {
      fetch(`${import.meta.env.VITE_SERVER_URL}/blogs/${postID}`)
        .then((res) => res.json())
        .then((result) => {
          setBlogItem(result)
        })
    }
    return () => {
      setBlogItem({})
    }
  }, [user])
  useEffect(() => {
    if (blogItem?.blog) {
      setFormValueValue(blogItem?.blog)
    }
    return () => {
      setFormValueValue()
    }
  }, [blogItem?.blog])

  const formHandler = (data) => {
    const postPacket = {
      title: data.blogTitle || blogItem?.title,
      blog: formValue,
    }
    fetch(`${import.meta.env.VITE_SERVER_URL}/blogs/${postID}`, {
      method: 'PUT',
      body: JSON.stringify(postPacket),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success('Update complete.')
        navigator('/my-posts')
      })
  }

  return (
    <>
      <Helmet>
        <title>Edit Post | StudyVerse</title>
      </Helmet>
      <main className="container mx-auto p-2 lg:px-0 py-10">
        <form onSubmit={handleSubmit(formHandler)}>
          <div className="flex gap-3 justify-between border-b-2 mb-3 pb-2 items-center">
            <h1 className="text-xl ">Edit Post</h1>
            <button className="btn btn-neutral px-10" type="submit">
              Update
            </button>
          </div>
          <div>
            <div className="flex gap-3 flex-col lg:flex-row mb-3">
              <input
                type="text"
                className="input input-bordered w-full focus:outline-none"
                placeholder="Blog Title"
                defaultValue={blogItem?.title}
                {...register('blogTitle')}
              />
            </div>

            <ReactQuill
              theme="snow"
              value={formValue}
              onChange={setFormValueValue}
              className="h-96 mb-10"
            />
          </div>
        </form>
      </main>
    </>
  )
}

export default Updater
