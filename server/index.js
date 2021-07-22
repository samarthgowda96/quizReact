import express from 'express'

import {db} from './connection.js'
import user from './routes/users.js'


const app= express();

db.connect((error)=>{
    if(error){
        throw e
    }
    console.log("mySQL connected")

})

app.use('/',user)
app.listen('3000',()=>{
    console.log("Server running on port 3000")
})