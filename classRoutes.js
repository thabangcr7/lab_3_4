const path = require('path')
const express = require('express')
const router = express.Router()
const classList = [] // our class list array
router.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})
router.get('/create', function (req, res) {
res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})
router.get('/delete', function (req, res) {
res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})
router.get('/edit', function (req, res) {
res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})


// RESTful api
router.get('/api/list', function (req, res) {
    res.json(classList) // Respond with JSON
    })
    router.get('/api/get/:id', function (req, res) {
    res.json(classList[req.params.id]) // Notice the wildcard in the URL?
    // Try browsing to /api/get/0 once you've added some entries
    })
    router.post('/api/create', function (req, res) {
    console.log('Adding the following student:', req.body.student)
    classList.push(req.body.student)
    res.redirect(req.baseUrl)
    })
    router.post('/api/delete', function (req, res) {
    console.log('deleting the following student:', req.body.student_)
    let checkstudent = function(x){
        return x==req.body.student_
    }
    let index_ = classList.findIndex(checkstudent)
    classList.splice(index_, 1)
    res.redirect(req.baseUrl)
    })
    router.post('/api/edit', function (req, res) {
    console.log('editing the following student:', req.body.student)
    let checkstudent = function(x){
        return x==req.body.student
    }
    let index_ = classList.findIndex(checkstudent)
    console.log('editing the following student:', req.body.new_student)
    classList.splice(index_, 1, req.body.new_student)
    res.redirect(req.baseUrl)
    })
module.exports = router

