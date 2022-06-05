const mongoose = require('mongoose');
// const connect = async () => { 
//     await mongoose.connect(connectionString);
// }
// connect()
//     .then(() => console.log('Connected to the DB'))
//     .catch((err) => console.log(err));
// const connectWithRetry = async () => {
//     try {
//         await mongoose.connect(connectionString);
//         console.log('Connected to the DB');
//     } catch (error) {
//         console.log(error);
//         setTimeout(() => {
//             connectWithRetry();
//         }, 5000);
//     }
// }
const connectDB = (url) => {
    return mongoose.connect(url);
}
module.exports = connectDB;