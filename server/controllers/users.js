import {db} from '../connection.js';
import bodyParser from 'body-Parser';

export const getUser= async(req,res)=>{
    

    try {
       
        const name=req.body;
       

        let sql = "INSERT INTO student SET ?"
        let query = db.query(sql,name,(error,results)=>{
                if(error){
                    throw error
                }
                console.log(query)
                console.log(results)
                res.send("name added")

        })
        
    } catch (error) {
        
    }
}