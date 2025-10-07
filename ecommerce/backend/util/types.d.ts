import { User } from "../entities/users.ts";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}