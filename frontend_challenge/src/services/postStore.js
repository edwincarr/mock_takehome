import { create } from 'zustand'
import instance from './axios.js'

const usePostStore = create(set => ({
  posts: [],

  clear: () => set({posts: []}),

  fetch: async (order) => {
    const response = await instance.get('/post', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
      params: {order}
    })
    set({posts: await response.data})
  },

  delete: async (id) => {
    await instance.delete(`/post/${id}`)
  },

  create: async(data) => {
    const { title, rating, coffeeId, text } = data

    await instance.post('/post',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {title, rating: parseFloat(rating), coffeeId: Number(coffeeId), text}
    })
  }
}))

export default usePostStore
