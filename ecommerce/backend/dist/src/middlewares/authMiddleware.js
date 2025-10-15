import jwt from "jsonwebtoken";
import { User } from "../entities/users.js";
import { AppDataSource } from "../../util/db.js";
export class AuthMiddleware {
    static instance;
    constructor() { }
    static getInstance() {
        if (!AuthMiddleware.instance) {
            AuthMiddleware.instance = new AuthMiddleware();
        }
        return AuthMiddleware.instance;
    }
    async authenticate(req, res, next) {
        try {
            const token = req.header("Authorization");
            //console.log("Token:", token);
            if (!token)
                throw new Error("Authorization token missing");
            const secret = process.env.JWT_SECRET || "super_secret_key";
            if (!secret) {
                console.error("JWT_SECRET is not defined!");
            }
            const decoded = jwt.verify(token, secret);
            //const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
            const dataSource = AppDataSource.getInstance();
            if (!dataSource.isInitialized) {
                await dataSource.initialize();
            }
            const userRepository = dataSource.getRepository(User);
            const user = await userRepository.findOne({
                where: { user_id: decoded.id },
            });
            if (!user)
                throw new Error("User not found");
            req.user = user;
            next();
        }
        catch (err) {
            console.error("Authentication Error:", err);
            res.status(401).json({ success: false, message: "Authentication failed" });
        }
    }
}
//# sourceMappingURL=authMiddleware.js.map