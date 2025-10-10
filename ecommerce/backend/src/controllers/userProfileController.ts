import type { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../util/db.js";
import { User } from "../entities/users.js";

export const userProfile = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const user = req.user;
        console.log(user);

        if(!user){
            return res.status(401).json({msg: "unauthorized access: no user found" })
        }

        const dataSource = AppDataSource.getInstance();
        
            if (!dataSource.isInitialized) {
                await dataSource.initialize();
            }
  
        const userRepo = dataSource.getRepository(User);

        const userDetails = await userRepo.findOne({
            where: {user_id:user.user_id},
            select: ["user_id", "first_name","last_name", "email", "phone_no", "dp_url" ]

        })

     

        if(!userDetails){
            return res.status(404).json({msg: "user not found!"})
        }
        return res.status(200).json({userDetails: userDetails});
    }catch(error){
        console.log(error)
        return res.status(500).json({msg:error || "internal server error"})
    }
}