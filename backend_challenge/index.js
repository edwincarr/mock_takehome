const express = require('express')
const cors = require('cors');
const helmet = require('helmet');
const coffeeRouter = require('./routers/coffee.js')
const postRouter = require('./routers/posts.js')

require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use(cors())
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
  })
)

app.use('/coffee', coffeeRouter)
app.use('/post', postRouter)

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: err.stack
  });
});

app.listen(port, () => console.log(`Listening on port ${port}...`))
