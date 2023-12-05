const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.use(express.static("public"))

app.listen(3000)
