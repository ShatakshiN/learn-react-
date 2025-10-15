/* import type { Request, Response, NextFunction } from "express";
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
} */
import { BaseController } from "./baseController.js";
import { UserService } from "../services/userProfileServices.js";
export class UserController extends BaseController {
    userService;
    constructor() {
        super();
        this.userService = new UserService();
    }
    getUserProfile = async (req, res, next) => {
        try {
            const user = req.user;
            if (!user)
                return this.sendError(res, "Unauthorized access: no user found", 401);
            const userDetails = await this.userService.getUserProfile(user.user_id);
            2;
            return this.sendSuccess(res, userDetails);
        }
        catch (error) {
            this.handleError(error, res);
        }
    };
    editUserProfile = async (req, res, next) => {
        try {
            const user = req.user;
            if (!user)
                return this.sendError(res, "Unauthorized", 401);
            const updates = req.body;
            const updatedProfile = await this.userService.updateUserProfile(user.user_id, updates);
            return this.sendSuccess(res, updatedProfile);
        }
        catch (error) {
            this.handleError(error, res);
        }
    };
    deleteUserAccount = async (req, res, next) => {
        try {
            const user = req.user;
            if (!user)
                return this.sendError(res, "Unauthorized", 401);
            const result = await this.userService.deleteUser(user.user_id);
            return this.sendSuccess(res, result);
        }
        catch (error) {
            this.handleError(error, res);
        }
    };
}
//# sourceMappingURL=userProfileController.js.map