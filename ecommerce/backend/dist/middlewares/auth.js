import jwt from "jsonwebtoken";
import { User } from '../entities/users.js';
import { AppDataSource } from "../util/db.js";
export async function authenticate(req, res, next) {
    try {
        const token = req.header("Authorization");
        console.log(token);
        if (!token)
            throw new Error("Authorization token missing");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: { user_id: decoded.userId },
        });
        if (!user)
            throw new Error("User not found");
        req.user = user;
        next();
    }
    catch (err) {
        console.error(err);
        res.status(401).json({ success: false, message: "Authentication failed" });
    }
}
//# sourceMappingURL=auth.js.map