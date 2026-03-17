import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  updateStatus,
  unassignTask,
  deleteTask
} from "../controllers/taskController.js";

import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, createTask);
router.get("/", auth, getTasks);
router.patch("/:id", auth, updateTask);
router.patch("/:id/status", auth, updateStatus);
router.patch("/:id/unassign", auth, unassignTask);
router.delete("/:id", auth, deleteTask);

export default router;