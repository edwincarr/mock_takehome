import './post.css'
import { useEffect } from 'react'
import usePostStore from '../../services/postStore.js'
import Stars from './stars.js'

const PostList = () => {
  const postList = usePostStore((state) => state.posts)
  const updatePosts = usePostStore((state) => state.fetch)
  const deletePosts = usePostStore((state) => state.delete)
  const clearState = usePostStore((state) => state.clear)

  useEffect(() => {
    updatePosts()
    return () => clearState()
  },[updatePosts, clearState])

  const postDelete = (id) => {
    deletePosts(id).then(() => {
      updatePosts()
    })
  }
  return (
    <>
      {postList.map((post, idx) => {

        return (
          <div key={idx} className='post'>
            <div onClick={() => postDelete(post.id)} className='post-delete'>X</div>
            <div className='posttitle'>{post.title}</div>
            <Stars rating={post.rating}/>
            <div className='posttext'>{post.text}</div>
            <p>{post.coffee_relation.name} - {post.coffee_relation.caffine_percentage} mg per oz</p>
          </div>
        )
      })}
    </>
  )
}

export default PostList
