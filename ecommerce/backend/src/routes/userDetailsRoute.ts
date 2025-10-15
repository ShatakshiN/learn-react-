/* import { Router } from "express";
import { userProfile } from "../controllers/userProfileController.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.get('/profile', authenticate, userProfile);

export default router; */

import { Router } from "express";
import { UserController } from "../controllers/userProfileController.js";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();
const userController = new UserController();
const auth = AuthMiddleware.getInstance();

router.get("/profile", auth.authenticate.bind(auth), userController.getUserProfile);
router.put("/profile/edit", auth.authenticate.bind(auth), userController.editUserProfile);
router.delete("/profile/delete", auth.authenticate.bind(auth), userController.deleteUserAccount);

export default router;