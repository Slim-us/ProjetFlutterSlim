import express from "express";
import { createUser } from "../controllers/UserController.js";

const router = express.Router();

router.post("/createuser", createUser);

export default router;
