import { BaseService } from "../services/baseServices.js";
import { User } from "../entities/users.js";
import bcrypt from "bcrypt";
export class UserService extends BaseService {
    async createUser(data) {
        const hashedPassword = await bcrypt.hash(data.hashed_password, 10);
        data.hashed_password = hashedPassword;
        return (await this.create(data));
    }
    async verifyPassword(password, hash) {
        return bcrypt.compare(password, hash);
    }
}
//# sourceMappingURL=userServices.js.map