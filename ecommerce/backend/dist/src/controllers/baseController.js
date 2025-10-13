export class BaseController {
    sendSuccess(res, data, status = 200) {
        res.status(status).json({ success: true, data });
    }
    sendError(res, message, status = 500) {
        res.status(status).json({ success: false, message });
    }
    handleError(error, res) {
        console.error(error);
        this.sendError(res, "Internal Server Error", 500);
    }
}
//# sourceMappingURL=baseController.js.map