import {db} from '../connection.js'
export const getUser= async(req,res)=>{
    try {
        let sql = "SELECT  * FROM student"
        let query = db.query(sql,(error,results)=>{
                if(error){
                    throw error
                }
                console.log(results)

        })
        
    } catch (error) {
        
    }
}