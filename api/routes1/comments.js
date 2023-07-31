import express from "express";
import {
  getComments,
  addComment,
  deleteComment,
} from "../controllers1/comment.js";

const router = express.Router();

// end points
router.get("/", getComments);
router.post("/", addComment);
router.delete("/:id", deleteComment);

export default router;
