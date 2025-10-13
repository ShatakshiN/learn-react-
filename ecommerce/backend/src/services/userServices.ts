import { BaseService } from "../services/baseServices.js";
import { User } from "../entities/users.js";
import bcrypt from "bcrypt";

export class UserService extends BaseService<User> {
  async createUser(data: Partial<User>): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.hashed_password!, 10);
    data.hashed_password = hashedPassword;
    return (await this.create(data)) as User;
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}

