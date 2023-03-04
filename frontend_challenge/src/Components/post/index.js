import './post.css'
import { useState } from 'react'
import PostModal from './postModal.js'
import PostList from './postList.js'
import usePostStore from '../../services/postStore.js'

const Posts = () => {
  const updatePost = usePostStore((state) => state.fetch)
  const [openModal, setOpenModal] = useState(false)

  const changeOrder = (order) => {
    updatePost(order)
  }
  return (
    <div>
      <div>
        <h3>Posts</h3>
        <button onClick={() => setOpenModal(!openModal)}>New Post</button>
        <PostModal open={openModal}/>
        <select onChange={(e) => changeOrder(e.target.value)}>
          <option value='asc'>Asc</option>
          <option value='desc'>Desc</option>
        </select>
      </div>
      <PostList/>
    </div>
  )
}

export default Posts
