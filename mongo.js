const mongoose = require('mongoose');

let connect = mongoose.createConnection('localhost','qzone');

let qzone = mongoose.model('qzone', {
  
});