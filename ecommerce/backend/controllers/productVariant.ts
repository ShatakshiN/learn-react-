import type { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../util/db.js";
import { VariantAttributeValue } from "../entities/variantAttributeValues.js";

export const AllVariants = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const idParam = req.body.id;

        if (!idParam){
            return res.status(400).json({msg:'Product variant Id is required'})
        }

        const productId = parseInt(idParam);

        if(isNaN(productId)){
            return res.status(400).json({msg:"invalid Id"})
        }

        const variantAttributesRepo = AppDataSource.getRepository(VariantAttributeValue);

        const allVariants = await variantAttributesRepo
            .createQueryBuilder("vav")
            .select("pv.id", "product_variant_id")
            .addSelect(
                `JSON_OBJECT_AGG(a.attribute, vav.value)`,
                "variant_attributes"
            )
            .innerJoin("vav.product_variant", "pv")
            .innerJoin("vav.attribute", "a")
            .where("pv.product_id = :productId", { productId })
            .groupBy("pv.id")
            .getRawMany();
        
        return res.status(200).json({allVariants: allVariants})
    }catch(error){
        console.log(error);
        res.status(500).json({msg: error|| "internal server error"})
    }
}

