import jwt from "jsonwebtoken";
import { UserService } from "./userServices.js";
import { User } from "../entities/users.js";
export class AuthService {
    userService;
    JWT_SECRET = process.env.JWT_SECRET || "super_secret_key";
    constructor(userService) {
        this.userService = userService;
    }
    async signUp(data) {
        return this.userService.createUser(data);
    }
    async login(email, password) {
        const user = await this.userService.findOne({ email });
        if (!user)
            throw new Error("User not found");
        const valid = await this.userService.verifyPassword(password, user.hashed_password);
        if (!valid)
            throw new Error("Invalid credentials");
        const token = jwt.sign({ id: user.user_id, email: user.email }, this.JWT_SECRET);
        return { token };
    }
}
//# sourceMappingURL=authServices.js.map