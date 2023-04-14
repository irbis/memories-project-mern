import express from "express";

import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get('/', (req, res) => getPosts(req, res));
router.post('/', (req, res) => createPost(req, res));

export default router;