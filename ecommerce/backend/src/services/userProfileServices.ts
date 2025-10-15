// services/userService.ts
import { User } from "../entities/users.js";
import { BaseRepositoryService } from "./baseRepoServices.js";
import bcrypt from "bcrypt";

export class UserService extends BaseRepositoryService<User> {
  constructor() {
    super(User);
  }

  public async getUserProfile(userId: number) {
    const user = await this.findOne({ user_id: userId });
    if (!user) throw new Error("User not found");
    
    const { user_id, first_name, last_name, email, phone_no, dp_url } = user;
    return { user_id, first_name, last_name, email, phone_no, dp_url };
  }

  public async updateUserProfile(userId: number, updates: any) {
    const user = await this.findOne({ user_id: userId });
    if (!user) throw new Error("User not found");

    if (updates.email) user.email = updates.email;
    if (updates.phone_no) user.phone_no = updates.phone_no;
    if (updates.dp_url) user.dp_url = updates.dp_url;

    if (updates.password) {
      const hashedPassword = await bcrypt.hash(updates.password, 10);
      user.hashed_password = hashedPassword;
    }

    await this.save(user);

    const { user_id, first_name, last_name, email, phone_no, dp_url } = user;
    return { user_id, first_name, last_name, email, phone_no, dp_url };
  }

    public async deleteUser(userId: number) {
    const user = await this.findOne({ user_id: userId });
    if (!user) throw new Error("User not found");

    await this.delete({ user_id: userId });
    return { message: "User account deleted successfully" };
  }
}
