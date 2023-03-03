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

router.post('/', asyncHandler(async(req, res) => {

}))

router.delete('/:id', asyncHandler(async(req, res) => {
  const id = req.params.id
}))

router.get('/coffee', asyncHandler(async(req, res) => {

}))

module.exports = router
