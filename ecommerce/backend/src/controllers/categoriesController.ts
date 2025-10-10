// click on categories - electronics - see sub cat - phones , accesories and more - click see opotion like view all phones, all accessories , 

import { Category } from "../entities/categories.js";
import type { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../util/db.js";
import { IsNull } from "typeorm";

export const categories = async(req:Request, res:Response, next:NextFunction)=>{
    try{

        const dataSource = AppDataSource.getInstance();

        if (!dataSource.isInitialized) {
            await dataSource.initialize();
        }

  
        const categoryRepository = dataSource.getRepository(Category);
        const categories = await categoryRepository.find({
            where: {parent: IsNull()}
        })

        if(!categories){
            return res.status(404).json({msg: "No Product Categories found!"});
            
        }
        res.status(200).json({categoryList: categories})
    }catch(error){
        console.log(error);
        return res.status(500).json({msg:error||"internal server error"});
    }
}

export const subCategories = async(req:Request, res:Response, next: NextFunction)=>{
    try{
        const idParam = req.params.id; 

        if (!idParam) { 
            return res.status(400).json({ msg: "Category ID is required" });
        }

        const parentId = parseInt(idParam);

        if (isNaN(parentId)) {
            return res.status(400).json({ msg: "Invalid category ID" });
        }

        const dataSource = AppDataSource.getInstance();

        if (!dataSource.isInitialized) {
            await dataSource.initialize();
        }
        const categoryRepository = dataSource.getRepository(Category);

        const subCategories = await categoryRepository.find({
            where: { parent: { id: parentId } },
            relations: ["parent"],
        })

        if (!subCategories) {
            res.status(404).json({ msg: "No subcategories found" })
        }

        res.status(200).json({ subcatList: subCategories })
    }catch(error){
        console.log(error);
        return res.status(500).json({msg:error||"internal server error"});
    }
}

