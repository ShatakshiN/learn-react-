
import type{ Response } from "express";

export abstract class BaseController {
  protected sendSuccess(res: Response, data: any, status = 200): void {
    res.status(status).json({ success: true, data });
  }

  protected sendError(res: Response, message: string, status = 500): void {
    res.status(status).json({ success: false, message });
  }

  protected handleError(error: unknown, res: Response): void {
    console.error(error);
    this.sendError(res, "Internal Server Error", 500);
  }

  // abstract method (forces child classes to define it)
 /*  abstract initializeRoutes(): void; */
}
