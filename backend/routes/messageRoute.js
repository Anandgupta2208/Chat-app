import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import  isAuthenticated  from "../middlewere/isAuthenticated.js";
const router = express.Router();

router.route("/send/:id").post(isAuthenticated,sendMessage);
router.route("/:id").get((req, res, next) => {
  next();
}, isAuthenticated, getMessages);

export default router;