import { create } from 'domain';
import express from 'express';
// import { commentController } from '../controllers/comment.controller';
import { createComment } from '../controllers/comment.controller';
export const commentRoutes = express.Router();


// commentRoutes.get('/', commentController.getcomment);
// commentRoutes.get('/label', commentController.getAllLabels);
// commentRoutes.post('/', commentController.addComment);
commentRoutes.post('/', createComment);
