import { Router } from "express";
import { userProfile } from "../controllers/userProfileController.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.get('/profile', authenticate, userProfile);

export default router;