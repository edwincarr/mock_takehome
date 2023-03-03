const express = require('express')
const coffeeRouter = require('./routers/coffee.js')
const postRouter = require('./routers/posts.js')

require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/coffee', coffeeRouter)
app.use('/post', postRouter)

app.listen(port, () => console.log(`Listening on port ${port}...`))
