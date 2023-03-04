import instance from './axios.js'

const getCoffee = async (order) => {
  const coffees = await instance.get('/coffee', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({order})
  })
  return coffees.data
}

export { getCoffee }
