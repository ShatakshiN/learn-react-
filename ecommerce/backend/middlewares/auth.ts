import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from '../entites/users.js';
import { AppDataSource } from "../util/db.js";

interface JwtPayload {
    userId: number; 
}

export async function authenticate(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const token = req.header("Authorization");
        if (!token) throw new Error("Authorization token missing");

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: { user_id: decoded.userId },
        });

        if (!user) throw new Error("User not found");

        req.user = user; 
        next();

    } catch (err) {
        console.error(err);
        res.status(401).json({ success: false, message: "Authentication failed" });
    }
}

