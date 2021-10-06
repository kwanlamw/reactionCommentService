import express from 'express';
// import { commentController } from '../app';
import { createComment } from '../controllers/comment.Controller'

export const commentRoutes = express.Router();


// commentRoutes.get('/', comment.getComment);
commentRoutes.post('/', createComment);
