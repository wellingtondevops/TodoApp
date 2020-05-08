const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://todoapp:Senha124578@ds151508.mlab.com:51508/todoapp')