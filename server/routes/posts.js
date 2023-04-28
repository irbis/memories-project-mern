import express from "express";

import { getPosts, createPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.get('/', (req, res) => getPosts(req, res));
router.post('/', (req, res) => createPost(req, res));
router.patch('/:id', updatePost);

export default router;