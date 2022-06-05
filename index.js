require('dotenv').config();
const connectDB = require('./db/connect');
const express = require('express');
const tasks = require('./routes/tasks');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const app = express();
const port = 3000;
const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to the DB');
        app.listen(port, console.log(`Listeing on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
startServer()