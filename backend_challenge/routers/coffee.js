const { Prisma, PrismaClient } = require('@prisma/client')
const router = require('express').Router()
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient()

router.get('/', asyncHandler(async(req, res) => {
  const { order } = req.body
}))

router.get('/ping', asyncHandler(async(req, res) => {

}))

router.get('/:id', asyncHandler(async(req, res) => {
  const id = req.params.id
}))

router.post('/create', asyncHandler(async(req, res) => {

}))

router.delete('/delete/:id', asyncHandler(async(req, res) => {
  const id = req.params.id
}))

module.exports = router
