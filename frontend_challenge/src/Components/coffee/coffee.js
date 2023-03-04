import './coffee.css'
import {useState, useEffect} from 'react'
import { deleteCoffee, getCoffee } from '../../services/coffeeCalls.js'
import mug from '../assets/svgs/mug.svg'

const Coffee = () => {
  const [coffeeList, setCoffeeList] = useState([])

  useEffect(() => {
    getCoffee().then(result => {
      console.log(result)
      setCoffeeList(result)
    })
    return () => {
      setCoffeeList([])
    }
  }, [])

  const setOrder = (order) => {
    getCoffee(order).then(result => {
      console.log(result)
      setCoffeeList(result)
    })
  }

  const coffeeDelete = (id) => {
    deleteCoffee(id).then(result => {
      console.log(result)
      setOrder()
    })
  }

  return (
    <div>
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
    </div>
  )
}

export default Coffee
