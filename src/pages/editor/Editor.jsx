import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Editor = () => {
  const [formValue, setFormValueValue] = useState('')
  const { register, handleSubmit } = useForm()
  const imgBBUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_KEY
  }`
  const formHandler = (data) => {
    const imgData = new FormData()
    imgData.append('image', data.thumbnailImage[0])
    const postPacket = {
      title: data.blogTitle,
      blog: formValue,
      thumbnail:
        'https://i.pinimg.com/564x/fb/ef/92/fbef9238845d30e7e2921c30f2e8b213.jpg',
    }
    fetch(`${import.meta.env.VITE_SERVER_URL}/blogs`, {
      method: 'POST',
      body: JSON.stringify(postPacket),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }
  return (
    <>
      <Helmet>
        <title>Add / Edit Post | StudyVerse</title>
      </Helmet>
      <main className="container mx-auto p-2 lg:px-0 py-10">
        <form onSubmit={handleSubmit(formHandler)}>
          <div className="flex gap-3 justify-between border-b-2 mb-3 pb-2 items-center">
            <h1 className="text-xl ">Add / Edit Post</h1>
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
