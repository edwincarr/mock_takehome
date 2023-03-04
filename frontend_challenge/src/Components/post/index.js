import './post.css'
import { useState } from 'react'
import PostModal from './postModal.js'
import PostList from './postList.js'

const Posts = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <div>
        <h3>Posts</h3>
        <button onClick={() => setOpenModal(!openModal)}>New Post</button>
        <PostModal open={openModal}/>
        <select>
          <option>Asc</option>
          <option>Desc</option>
        </select>
      </div>
      <PostList/>
    </div>
  )
}

export default Posts
