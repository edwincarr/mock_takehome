import { create } from 'zustand'
import instance from './axios.js'

const useCoffeeStore = create(set => ({
  coffeeList: [],
  clear: () => set({coffeeList: []}),
  fetch: async (order) => {
    const response = await instance.get('/coffee', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params: {order}
    })
    set({coffeeList: response.data})
  },
  delete: async (id) => {
    await instance.delete(`/coffee/delete/${id}`)
  },
  create: async(data) => {
    const { name, year, caffine } = data
    const percent = Math.floor(caffine/8)
    await instance.post('/coffee/create',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {name, year: Number(year), content: Number(caffine), percent}
    })
  }
}))

export default useCoffeeStore
