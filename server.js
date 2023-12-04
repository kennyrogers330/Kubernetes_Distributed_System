const express = require('express')
const app = express()

app.set('view engine', 'ejs')

// app.use(logger)


//******* */ We don't need this rendering when its static pages we are serving

// app.get('/', (req, res) => {
//     console.log('Here')
//     res.render('index', { textChanged: 'World' })
// })
// *********

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.use(express.static("public"))

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
