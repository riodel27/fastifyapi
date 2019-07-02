// const mongoose = require('mongoose');

// const conn1 = mongoose.createConnection('mongodb://localhost:27017/local-viva-dev', {
//   useNewUrlParser: true
// })

// const conn2 = mongoose.createConnection('mongodb://localhost:27017/local-viva-dev', {
//   useNewUrlParser: true
// })

// const createConnection = () => {

// }

// // module.expo

// module.exports = {
//   createConnection
// }


let mongoose = require('mongoose');
mongoose.dev_conn = mongoose.createConnection('mongodb://localhost:27017/local-viva-dev');
mongoose.prod_conn = mongoose.createConnection('mongodb://localhost:27017/local-viva-dev');
module.exports = mongoose;