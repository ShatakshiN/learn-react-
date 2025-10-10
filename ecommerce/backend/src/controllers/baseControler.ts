
import type{ Request, Response, NextFunction } from "express"; 

export abstract class BaseController{
    protected sendSuccess(res:Response, payLoad?:string, code:number = 200){
        if(typeof(payLoad)=== "string"){
            res.status(code).json({success:true, data:payLoad});
        }else{
            res.status(code).json({success:true, data:payLoad??null});
        }
    };

    protected sendError(res:Response, error:string , status:number = 400){
        
    }
}