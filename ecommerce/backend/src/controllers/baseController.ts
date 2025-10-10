import type{  Response } from "express"; 

export abstract class BaseController {

  protected sendSuccess(res: Response, payload?: any, code: number = 200) {
    if (typeof payload === "string") {
      
      res.status(code).json({ success: true, message: payload });
    } else {
      
      res.status(code).json({ success: true, data: payload ?? null });
    }
  }
  protected sendError(res: Response, error: any, code: number = 400) {
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : "Something went wrong";

    res.status(code).json({ success: false, message });
  }
  abstract registerRoutes(): void;
}
