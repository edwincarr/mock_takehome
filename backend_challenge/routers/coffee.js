const { Prisma, PrismaClient } = require('@prisma/client')
const router = require('express').Router()
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient()

router.get('/', asyncHandler(async(req, res) => {
  const order = req.query.order
  
  const orderBy = order ? order : 'asc';

  const coffees = await prisma.coffee.findMany({
    orderBy: { name: orderBy}
  })
  res.json(coffees)
  console.log('GET /coffee')
}))

router.get('/ping', asyncHandler(async(req, res) => {
  res.json({'status': 'good'})
  console.log('GET /coffee/ping')
}))

router.get('/:id', asyncHandler(async(req, res) => {
  const { id } = req.params

  const coffee = await prisma.coffee.findUniqueOrThrow({
    where: { id: Number(id) }
  })
  res.json(coffee)
  console.log('GET /coffee/:id')
}))

router.post('/create', asyncHandler(async(req, res) => {
  const { name, year, content, percent } = req.body.data

  const coffee = await prisma.coffee.create({
    data: {
      name,
      year,
      caffine_content: content,
      caffine_percentage: percent
    }
  })

  res.json(coffee)
  console.log('POST /post/create')
}))

router.delete('/delete/:id', asyncHandler(async(req, res) => {
  const { id } = req.params

  const deletion = await prisma.coffee.delete({
    where: {id: Number(id)},
  })
  res.json(deletion)
  console.log('DELETE /coffee/delete/:id')
}))

module.exports = router
