const { PrismaClient } = require('@prisma/client')
const router = require('express').Router()
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient()

router.get('/', asyncHandler(async(req, res) => {
  const { order } = req.body
  const orderBy = order ? order : 'asc';

  const posts = await prisma.post.findMany({
    orderBy: {
      created_at: orderBy
    },
    include: {coffee_relation: true}
  })

  res.json(posts)
  console.log('GET /post')
}))

router.post('/', asyncHandler(async(req, res) => {
  const { title, coffeeId, text, rating } = req.body

  const post = await prisma.post.create({
    data: {
      title,
      text,
      rating: parseFloat(rating),
      coffeeId: Number(coffeeId)
    },
    include: {coffee_relation: true}
  })

  res.json(post)
  console.log('POST /post')
}))

router.get('/ping', asyncHandler(async(req, res) => {
  res.json({'status': 'good'})
  console.log('GET /post/ping')
}))

router.get('/coffee', asyncHandler(async(req, res) => {
  const {id, name} = req.body

  const posts = await prisma.post.findMany({
    where: {
      ...(id && name ? {coffeeId: Number(id)}: {coffee_relation: {name}})
    },
    include: {coffee_relation: true},
    orderBy: { created_at: 'desc' }
  })

  res.json(posts)
  console.log('GET /post/coffee')
}))

router.get('/:id', asyncHandler(async(req, res) => {
  const { id } = req.params

  const post = await prisma.post.findUniqueOrThrow({
    where: {id: Number(id)},
    include: {coffee_relation: true}
  })

  res.json(post)
  console.log('GET /post/:id')
}))

router.delete('/:id', asyncHandler(async(req, res) => {
  const { id } = req.params

  const deletion = await prisma.post.delete({ where: {id: Number(id)} })

  res.json(deletion)
  console.log('DELETE /post/:id')
}))

module.exports = router
