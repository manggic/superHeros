

import dbConnect from "../../../db/dbconnect";
import Hero from "../../../models/Hero";


dbConnect()


export default async (req, res ) => {
    const { query:{id},   method} = req
    
    switch (method) {
       case "GET":
           try {
               const heros = await Hero.findById(id)
               res.status(200).json({success: true , data: heros})
           } catch (error) {
            console.log('err', error)

               res.status(400).json({success: false , data: {}})
           } 
           break;
       case "PUT":
           try {
               const hero = await Hero.findByIdAndUpdate(id, req.body, {new:true})
               res.status(200).json({success: true , data: hero})
           } catch (error) {
               res.status(400).json({success: false , data: {}})
           }  
           break;
       case "DELETE":
           try {
               const hero = await Hero.deleteOne({_id: id})
               res.status(200).json({success: true , data: hero})
           } catch (error) {
            console.log('err', error)

               res.status(400).json({success: false , data: {}})
           }  
           break;
       default:
            break;
    }
}

