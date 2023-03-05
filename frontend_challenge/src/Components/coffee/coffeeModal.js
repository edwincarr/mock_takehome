import './coffee.css'
import { useState } from 'react'
import useCoffeeStore from '../../services/coffeeStore.js'

const CoffeeModal = ({open, onClose}) => {
  const createCoffee = useCoffeeStore((state) => state.create)
  const updateCoffee = useCoffeeStore((state) => state.fetch)

  const [name, setName] = useState('')
  const [year, setYear] = useState(0)
  const [caffine, setCaffine] = useState(0)

  if(!open) return null

  const submitCoffeeForm = (e) => {
    e.preventDefault()
    const data = {name, year, caffine}
    createCoffee(data).then(() => {
      updateCoffee()
      onClose()
      clearCoffee()
    }
    )
  }
  const clearCoffee = () => {
    setName('')
    setYear(0)
    setCaffine(0)
  }

  return (
    <div>
      <div className='modal-container'>
        <h3>New Coffee</h3>
        <form className='coffee-form' onSubmit={(e) => submitCoffeeForm(e)}>
          <label>Name: </label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} required/>
          <label>Year: </label>
          <input type='number' value={year} onChange={(e) => setYear(e.target.value)} required/>
          <label>Caffine: </label>
          <input type='number' value={caffine} onChange={(e) => setCaffine(e.target.value)} required/>
          <input type='submit' value='submit'/>
        </form>
      </div>
    </div>
  )
}

export default CoffeeModal
