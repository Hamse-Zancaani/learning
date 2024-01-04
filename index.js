const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT ||7000;
const dotenv= require("dotenv")
dotenv.config({path:'./.env'})

//setting up the database connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to the database")
}).catch((err)=>{
    console.log(err)
})



// setup the cors to allow the request from the frontend

app.use(cors());

//setup the express to parse the data
const authRoutes = require('./Routes/authRoutes');
const courseRoutes= require('./Routes/courseRoutes')
const contentRoutes= require('./Routes/contentRoutes')

// setup the middleware to parse the data
app.use(express.json());


//set up the middlware

app.use('/auth',authRoutes);

app.use('/course',courseRoutes)
app.use('/content',contentRoutes)



//listen the port 

app.listen(PORT,()=>{   
    console.log(`server is running on port ${PORT}`)
})