const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://userdb:user123456@ds151508.mlab.com:51508/todoapp', {
    useMongoClient: true,
    /* other options */
  })