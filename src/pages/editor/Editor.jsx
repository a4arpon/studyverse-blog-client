import axios from 'axios'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Editor = () => {
  const [formValue, setFormValueValue] = useState('')
  const { register, handleSubmit } = useForm()
  const { user, loading } = useAuth()
  const imgBBUrl =
    'https://api.imgbb.com/1/upload?key=88f8e6276bff624f5ee959d9fd14bc39'
  const navigator = useNavigate()
  useEffect(() => {
    if (!user && !loading) {
      navigator('/')
    }
  }, [user])
  const formHandler = (data) => {
    const imgData = new FormData()
    imgData.append('thumbnailImage', data.thumbnailImage[0])
    console.log(imgData)
    axios
      .post(imgBBUrl, imgData)
      .then((imageData) => console.log(imageData.data))
    // fetch(imgBBUrl, {
    //   method: 'POST',
    //   body: imgData,
    // })
    //   .then((res) => res.json())
    //   .then((imgRes) => {
    //     const postPacket = {
    //       title: data.blogTitle,
    //       blog: formValue,
    //       thumbnail: imgRes,
    //       publishedAt: new Date(),
    //       authorEmail: user?.email,
    //       author: user?.displayName,
    //     }
    //     console.log(postPacket)
    //   })
    // fetch(`${import.meta.env.VITE_SERVER_URL}/blogs`, {
    //   method: 'POST',
    //   body: JSON.stringify(postPacket),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     navigator('/my-posts')
    //     toast.success('Post Added.')
    //   })
  }
  return (
    <>
      <Helmet>
        <title>Add Post | StudyVerse</title>
      </Helmet>
      <main className="container mx-auto p-2 lg:px-0 py-10">
        <form onSubmit={handleSubmit(formHandler)}>
          <div className="flex gap-3 justify-between border-b-2 mb-3 pb-2 items-center">
            <h1 className="text-xl ">Add Post</h1>
            <button className="btn btn-neutral px-10" type="submit">
              Post
            </button>
          </div>
          <div>
            <div className="flex gap-3 flex-col lg:flex-row mb-3">
              <input
                type="text"
                className="input input-bordered w-full focus:outline-none"
                placeholder="Blog Title"
                {...register('blogTitle')}
              />
              <input
                type="file"
                className="file-input file-input-bordered"
                {...register('thumbnailImage')}
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

export default Editor
