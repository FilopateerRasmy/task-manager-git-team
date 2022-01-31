const express = require('express');
const app = express();
require('dotenv').config()
const port =process.env.PORT || 3000; 
const connectDB = require('./db/connect');
const notFound = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('./public'));

// routes


app.use('*',notFound)
app.use(errorHandlerMiddleware)



const start = async()=>{
try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, ()=>{console.log(`listening on port ${port}`)});

} catch (error) {
    console.error(error)
}
}

start();

