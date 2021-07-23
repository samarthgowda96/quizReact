import {db} from '../connection.js';
import bodyParser from 'body-Parser';

export const getUser= async(req,res)=>{
    console.log("In getUser")    
    try {
       
        const name = req.body;
        let sql = "INSERT INTO student SET ?"
        let query= db.query(sql,name,(error,results)=>{
        if(error){
                   throw error
                }
                
         })
        let sqll='SELECT id,name FROM student WHERE name = ?';
        console.log(sqll)    
     
        let queryy= db.query(sqll, name.name, (error,results)=>{
            if(error){
                throw error
            }
            console.log(results)                
            res.status(200).send(results)
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
        
    }
}