

import dbConnect from "../../../db/dbconnect";
import Hero from "../../../models/Hero";


dbConnect()


export default async (req, res ) => {
     const {method} = req
     
     switch (method) {
        case "GET":
            try {
                const heros = await Hero.find({})
                res.status(200).json({success: true , data: heros})
            } catch (error) {
                res.status(400).json({success: false , data: {}})
            } 
            break;
        case "POST":
            try {
                const hero = await Hero.create(req.body)
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





