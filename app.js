const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
var cors = require('cors')
const queries = require('./queries')

app.use(cors())
app.use(bodyParser.json())


//INDEX ROUTE
app.get('/users', function (req, res) {
    queries.listAllUsers().then(users => res.send(users))
    // queries.getAll().then(response => res.send(response))
})

// //SHOW ROUTE
app.get('/users/:id', function (req, res) {
    queries.getUserById(req.params.id).then(response => res.send(response))
})

//Create User Route
app.post('/users', function (req, res) {
    queries.createUser(req.body).then(response => res.send(response))
})
// //UPDATE ROUTE
app.put('/users/:id', (req, res) => {
    queries.updateUser(req.params.id, req.body).then(data => res.json(data[0]))
})

// //DELETE ALL ROUTE
app.delete('/users/:id', (req, res) => {
    queries.deleteUser(req.params.id).then(res.sendStatus(204))
})

//Accounts section
app.get('/accounts', function (req, res) {
    queries.getAllAccounts(req.params.id).then(response => res.send(response))
})
//SHOW ROUTE
// app.get('/accounts/:id', function (req, res) {
//     queries.getAccountById(req.params.id).then(response => res.send(response))
// })
// //UPDATE ROUTE
// app.put('/:id', (req, res) => {
//     queries.updateAccounts(req.params.id, req.body).then(data => res.json(data[0]))
// })
// //POST ROUTE
// app.post('/accounts', (req, res) => {
//     queries.createAccount(req.body).then(item => res.send(item))
// })
// // //DELETE ALL ROUTE
// app.delete('/accounts/:id', (req, res) => {
//     queries.deleteUser(req.params.id).then(res.sendStatus(204))
// })

//Transactions section
app.get('/transactions', function (req, res) {
    queries.getAllTransactions().then(response => res.send(response))
})
// app.get('/transactions/:id', function (req, res) {
//     queries.getTransactionsById(req.params.id).then(response => res.send(response))
// })
// //UPDATE ROUTE
// app.put('/transactions/:id', (req, res) => {
//     queries.updateTransaction(req.params.id, req.body).then(data => res.json(data[0]))
// })
// //POST ROUTE
// app.post('/transactions', (req, res) => {
//     queries.createTransactions(req.body).then(item => res.send(item))
// })
// // //DELETE ALL ROUTE
// app.delete('/transactions/:id', (req, res) => {
//     queries.deleteTransactions(req.params.id).then(res.sendStatus(204))
// })


app.listen(port, function () {
    console.log('Serving on port 3001.')
})