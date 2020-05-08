const express = require('express')

module.exports = function (server) {

    //API ROUTES
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/tudoService')
    todoService.register(router, '/todos')




}