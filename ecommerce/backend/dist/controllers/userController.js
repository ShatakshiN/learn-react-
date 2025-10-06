import { User } from "../entites/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../util/db.js";
import { config } from "dotenv";
config();
export const signUp = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phone, password, dpUrl } = req.body;
        const userRepository = AppDataSource.getRepository(User);
        const existingUseer = await userRepository.findOne({
            where: { email }
        });
        if (existingUseer) {
            (res.status(400).json({ msg: "user already exists !" }));
            return;
        }
        ;
        bcrypt.hash(password, 10, async (error, hashPassword) => {
            try {
                const newUser = new User();
                newUser.first_name = firstName;
                newUser.last_name = lastName;
                newUser.dp_url = dpUrl || "";
                newUser.email = email;
                newUser.phone_no = phone;
                newUser.hashed_password = hashPassword;
                await userRepository.save(newUser);
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
        res.status(201).json({ msg: "sign Up successful" });
    }
    catch (error) {
        res.status(500).json({ msg: error || "internal server error" });
    }
    ;
};
const generateAuthToken = (userId, email) => {
    const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key';
    const payload = { userId, email };
    return jwt.sign(payload, JWT_SECRET);
};
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: { email: email }
        });
        if (!user) {
            res.status(404).json({ msg: "user doesn't exist" });
            return;
        }
        ;
        const userPassword = user?.hashed_password;
        const passwordMatch = await bcrypt.compare(password, userPassword);
        if (!passwordMatch) {
            res.status(400).json({ msg: "password incorrect" });
            return;
        }
        ;
        const token = generateAuthToken(user.user_id, user.email);
        res.status(200).json({ msg: 'user successfully logged in', token });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
    ;
};
//# sourceMappingURL=userController.js.map