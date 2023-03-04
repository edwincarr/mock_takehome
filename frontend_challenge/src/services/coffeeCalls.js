import instance from './axios.js'

const getCoffee = async (order) => {
  const coffees = await instance.get('/coffee', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    params: {order}
  })
  return coffees.data
}

const deleteCoffee = async (id) => {
  const coffee = await instance.delete(`coffee/delete/${id}`)
  return coffee.data
}

export { getCoffee, deleteCoffee }
