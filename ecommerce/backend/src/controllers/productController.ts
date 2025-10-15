/* import type { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../util/db.js";
import { Product } from "../entities/products.js";


export const AllProducts = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const idParam = req.params.id;

        if(!idParam){
            return res.status(400).json({msg:"category ID is required"})
        };
        
        const parentId = parseInt(idParam);

        if (isNaN(parentId)){
            return res.status(400).json({msg:"invalid ID"})
        }

        const dataSource = AppDataSource.getInstance();
        
            if (!dataSource.isInitialized) {
                await dataSource.initialize();
            }
        
          
        const productRepository = dataSource.getRepository(Product);

        const allProducts = await productRepository
        .createQueryBuilder("p")
        .leftJoinAndSelect("p.variants", "pv")
        .leftJoinAndSelect("pv.images", "pi")
        .innerJoin("p.category", "c")
        .where("p.category_id = :categoryId", { categoryId:parentId })
        .select([
            "p.id",
            "p.product_name",
            "pi.image_url"
        ])
        .getMany();

        if(!allProducts){
            return res.status(404).json({msg:"no products found"})
        }
        res.status(200).json({allProds:allProducts})

    }catch(error){
        console.log(error)
        return res.status(500).json({msg:error||"internal server error"});
    }
} */

import type{ Request, Response, NextFunction } from "express";
import { BaseController } from "./baseController.js";
import { ProductService } from "../services/productServices.js";

export class ProductController extends BaseController {
  private productService: ProductService;

  constructor() {
    super();
    this.productService = new ProductService();
  }

  public async getAllProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const idParam = req.params.id;

      if (!idParam) {
        return this.sendError(res, "Category ID is required", 400);
      }

      const parentId = parseInt(idParam);

      if (isNaN(parentId)) {
        return this.sendError(res, "Invalid category ID", 400);
      }

      const allProducts = await this.productService.findProductsByCategory(parentId);

      if (!allProducts || allProducts.length === 0) {
        return this.sendError(res, "No products found", 404);
      }

      this.sendSuccess(res, allProducts, 200);
    } catch (error) {
      this.handleError(error, res);
    }
  }
}






