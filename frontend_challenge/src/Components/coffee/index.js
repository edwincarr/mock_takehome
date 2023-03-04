import './coffee.css'
import { useState } from 'react'
import CoffeeList from './coffeeList.js'
import CoffeeModal from './coffeeModal.js'

const Coffee = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <div className='coffee-header'>
        <h3>Coffees</h3>
        <button onClick={() => setOpenModal(!openModal)}>Modal</button>
        <CoffeeModal open={openModal}/>
      </div>
      <CoffeeList/>
    </div>
  )
}

export default Coffee
