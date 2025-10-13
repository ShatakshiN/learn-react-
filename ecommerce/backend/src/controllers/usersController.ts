
import type{ Request, Response} from "express";
import { BaseController } from "./baseController.js";
import { UserService } from "../services/userServices.js";
import { AuthService } from "../services/authServices.js";
import { AppDataSource } from "../../util/db.js";
import { User } from "../entities/users.js";

export class UserController extends BaseController {
  private authService: AuthService;

  constructor() {
    super();
    const dataSource = AppDataSource.getInstance();
    const userRepo = dataSource.getRepository(User);
    const userService = new UserService(userRepo);
    this.authService = new AuthService(userService);
  }

  public async signUp(req: Request, res: Response): Promise<void> {
    try {
      const dpFile = req.file;
      const dpUrl = dpFile ? `/uploads/${dpFile.filename}` : "/uploads/default.png";

      const newUser = await this.authService.signUp({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        phone_no: req.body.phone,
        dp_url: dpUrl,
        hashed_password: req.body.password,
      });

      this.sendSuccess(res, { msg: "Signup successful", user: newUser }, 201);
    } catch (error: any) {
      this.sendError(res, error.message || "Signup failed", 400);
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const result = await this.authService.login(email, password);
      this.sendSuccess(res, { msg: "Login successful", token: result.token }, 200);
    } catch (error: any) {
      console.log(error);
      this.sendError(res, error.message || "Login failed", 400);
    }
  }
}