import './coffee.css'
import { useEffect } from 'react'
import mug from '../assets/svgs/mug.svg'
import useCoffeeStore from '../../services/store.js'

const CoffeeList = () => {
  const coffeeList = useCoffeeStore((state) => state.coffeeList)
  const updateCoffee = useCoffeeStore((state) => state.fetch)
  const deleteCoffee = useCoffeeStore((state) => state.delete)
  const clearState = useCoffeeStore((state) => state.clear)

  useEffect(() => {
    updateCoffee()
    return () => clearState()
  },[updateCoffee, clearState])

  const coffeeDelete = (id) => {
    deleteCoffee(id).then(e => {
      updateCoffee()
    })
  }

  return (
    <>
      {coffeeList.map((coffee, idx) => {
        return (
          <div key={idx} className='coffee-container'>
            <img src={mug} height='20' alt='mug'/>
            <div className='coffee-name'>&nbsp;{coffee.name}&nbsp;</div>
            <div className='coffee-year'>-&nbsp;{coffee.year}</div>
            <div className='coffee-delete' onClick={() => coffeeDelete(coffee.id)}>x</div>
          </div>
        )
      })}
    </>
  )
}

export default CoffeeList
