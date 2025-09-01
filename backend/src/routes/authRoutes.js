    import express from "express";
    import { registerUser, loginUser, googleLoginController } from "../controllers/authController.js";
    // import multer from "multer";
    // import {upload} from "../middleware.js/authMiddleware.js";

    const router = express.Router();

    // Multer setup for file uploads
    // const storage = multer.diskStorage({
    // destination: (req, file, cb) => {
    //     cb(null, "uploads/"); // folder to store images
    // },
    // filename: (req, file, cb) => {
    //     cb(null, Date.now() + "-" + file.originalname);
    // },
    // });
    // const upload = multer({ storage });

    // Add upload middleware to register route
    router.post("/register", registerUser);
    router.post("/login", loginUser);
    router.post("/google-login", googleLoginController);

    export default router;
