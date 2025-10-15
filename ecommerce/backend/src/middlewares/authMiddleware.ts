import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../entities/users.js";
import { AppDataSource } from "../../util/db.js";

interface JwtPayload {
  id: number;
}


declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export class AuthMiddleware {
  private static instance: AuthMiddleware;

  private constructor() {}

  public static getInstance(): AuthMiddleware {
    if (!AuthMiddleware.instance) {
      AuthMiddleware.instance = new AuthMiddleware();
    }
    return AuthMiddleware.instance;
  }

  public async authenticate(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.header("Authorization");
      //console.log("Token:", token);

      if (!token) throw new Error("Authorization token missing");

      const secret = process.env.JWT_SECRET || "super_secret_key";

      if (!secret) {
        console.error("JWT_SECRET is not defined!");  
      }

      const decoded = jwt.verify(token, secret) as JwtPayload;

      //const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

      const dataSource = AppDataSource.getInstance();

      if (!dataSource.isInitialized) {
        await dataSource.initialize();
      }

      const userRepository = dataSource.getRepository(User);
      const user = await userRepository.findOne({
        where: { user_id: decoded.id },
      });

      if (!user) throw new Error("User not found");

      req.user = user;
      next();
    } catch (err) {
      console.error("Authentication Error:", err);
      res.status(401).json({ success: false, message: "Authentication failed" });
    }
  }
}
