import { AppDataSource } from "../util/db.js";
import { User } from "../entities/users.js";
export const userProfile = async (req, res, next) => {
    try {
        const user = req.user;
        console.log(user);
        if (!user) {
            return res.status(401).json({ msg: "unauthorized access: no user found" });
        }
        const userRepo = AppDataSource.getRepository(User);
        const userDetails = await userRepo.findOne({
            where: { user_id: user.user_id },
            select: ["user_id", "first_name", "last_name", "email", "phone_no", "dp_url"]
        });
        if (!userDetails) {
            return res.status(404).json({ msg: "user not found!" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error || "internal server error" });
    }
};
//# sourceMappingURL=userProfileController.js.map