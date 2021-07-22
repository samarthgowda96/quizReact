import express from 'express'

import {db} from './connection.js'
import user from './routes/users.js'
import bodyParser from 'body-Parser';
import cors from 'cors'


const app= express();
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

db.connect((error)=>{
    if(error){
        throw e
    }
    console.log("mySQL connected")

})

app.use('/',user)
app.listen('3001',()=>{
    console.log("Server running on port 3000")
})