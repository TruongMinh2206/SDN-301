import express from "express"
import * as dotenv from 'dotenv'
import connectDB from "./database/database.js"
import {userRouter, productRouter, studentRouter} from './routes/index.js'

// import { connect } from "mongoose"
// import Product from "./models/productModel.js"

dotenv.config()
const app = express()
app.use(express.json())

// Routes: GET, POST, PUT (PATCH), DELETE
app.get('/', (req, res)=>{
    res.send("Welcome to Home RESTful API")
})

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/students', studentRouter)
const port = process.env.PORT || 8080

app.listen(port, ()=>{
    connectDB()
    console.log(`Server is running on port ${port}`);
})

