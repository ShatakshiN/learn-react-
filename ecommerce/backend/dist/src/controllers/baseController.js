export class BaseController {
    sendSuccess(res, payload, code = 200) {
        if (typeof payload === "string") {
            res.status(code).json({ success: true, message: payload });
        }
        else {
            res.status(code).json({ success: true, data: payload ?? null });
        }
    }
    sendError(res, error, code = 400) {
        const message = error instanceof Error
            ? error.message
            : typeof error === "string"
                ? error
                : "Something went wrong";
        res.status(code).json({ success: false, message });
    }
}
//# sourceMappingURL=baseController.js.map