import './post.css'
import { useEffect } from 'react'
import star from '../assets/svgs/star-solid.svg'
import usePostStore from '../../services/postStore.js'

const PostList = () => {
  const postList = usePostStore((state) => state.posts)
  const updatePosts = usePostStore((state) => state.fetch)
  const deletePosts = usePostStore((state) => state.delete)
  const clearState = usePostStore((state) => state.clear)

  useEffect(() => {
    updatePosts().then((e) => {
      console.log(postList)
    })
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
          <div key={idx}>
            <div onClick={() => postDelete(post.id)}>X</div>
            <h3>{post.title}</h3>
            <p>{post.rating}</p>
            <p>{post.text}</p>
            <p>{post.coffee_relation.name} - {post.coffee_relation.caffine_percentage*8} mg per oz</p>
          </div>
        )
      })}
    </>
  )
}

export default PostList
