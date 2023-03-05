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
    <div className='postlist-container'>
      <div className='postlist-header'>
        <div className='post-headerleft'>
          <h2>Posts</h2>
          <button onClick={() => setOpenModal(!openModal)} className='post-button'>New Post</button>
            <PostModal open={openModal} onClose={() => setOpenModal(false)}/>
        </div>
        <select onChange={(e) => changeOrder(e.target.value)} className='postorder'>
          <option value='asc'>Asc</option>
          <option value='desc'>Desc</option>
        </select>
      </div>
      <PostList/>
    </div>
  )
}

export default Posts
