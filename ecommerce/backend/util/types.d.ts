import { User } from "../entites/users.ts";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}