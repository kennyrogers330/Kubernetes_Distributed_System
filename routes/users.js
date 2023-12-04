const express = require("express")

const router = express.Router()

router.get('/', (req, res) => {
    res.send("User List")
})

// Should always come before dynamic routes

router.get('/new', (req, res) => {
    // res.send("User New Form")
    res.render("/users/new")
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.route("/:id").get((req, res) => {
    console.log(req.user)
    res.send(`Get User with ID: ${req.params.id}`)
}).put((req, res) => {
    res.send(`Update User with ID: ${req.params.id}`)
}).delete((req, res) => {
    res.send(`Delete User with ID: ${req.params.id}`)
})

// router.get('/:id', (req, res) => {
//     res.send(`Get User with ID: ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`Update User with ID: ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`Delete User with ID: ${req.params.id}`)
// })

// Middlewares
const users = [{ name: "kenny" }, { name: "roger" }]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    // console.log(id)
    next()
})

module.exports = router