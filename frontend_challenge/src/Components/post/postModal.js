import './post.css'
import {useState} from 'react'
import usePostStore from '../../services/postStore.js'
import useCoffeeStore from '../../services/coffeeStore.js'

const PostModal = ({open}) => {
  const coffeeList = useCoffeeStore((state) => state.coffeeList)
  const createPost = usePostStore((state) => state.create)
  const updatePost = usePostStore((state) => state.fetch)

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const [coffeeId, setCoffeeId] = useState(0)
  if(!open) return null

  const submitPostForm = (e) => {
    e.preventDefault()
    const data = {title,text,rating,coffeeId}
    createPost(data).then(() => {
      updatePost()
    })
  }
  return (
    <div>
      <div>
        <h3>Create Post</h3>
        <form onSubmit={(e) => submitPostForm(e)}>
          <label>Title: </label>
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
          <label>Rating: </label>
          <input type='number' value={rating} onChange={(e) => setRating(e.target.value)}/>
          <label>Coffee: </label>
          <select value={coffeeId} onChange={(e) => setCoffeeId(e.target.value)}>
            {coffeeList.map((coffee, idx) => {
              return <option key={idx} value={coffee.id}>{coffee.name}</option>
              })}
          </select>
          <label>Text: </label>
          <textarea value={text} onChange={(e) => setText(e.target.value)}/>
          <input type='submit' value='submit'/>
        </form>
      </div>
    </div>
  )
}

export default PostModal
