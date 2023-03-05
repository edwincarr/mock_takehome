import './coffee.css'
import { useState } from 'react'
import CoffeeList from './coffeeList.js'
import CoffeeModal from './coffeeModal.js'

const Coffee = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='coffee-component-container'>
      <div className='coffee-header'>
        <h3>Coffees</h3>
        <button className='modal-button' onClick={() => setOpenModal(!openModal)}>New Coffee</button>
        <CoffeeModal open={openModal} onClose={() => setOpenModal(false)}/>
      </div>
      <CoffeeList/>
    </div>
  )
}

export default Coffee
