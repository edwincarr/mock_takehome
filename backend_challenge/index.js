const { Prisma, PrismaClient } = require('@prisma/client')
const express = require('express')
const coffeeRouter = require('./routers/coffee.js')
const postRouter = require('./routers/posts.js')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.use('/coffee', coffeeRouter)
app.use('/post', postRouter)

app.listen(5000, () => console.log(`Listening on port 5000`))
