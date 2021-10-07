import {  FilterQuery , UpdateQuery } from "mongoose"; 
import CommentModel, { IComment } from "../models/comment.model";

export function addComment(input: FilterQuery<IComment>) {
  return CommentModel.create(input);
}

export function getComment(query: FilterQuery<IComment>) {
  return CommentModel.where(query);
}

export function editComment(input: UpdateQuery<IComment>) {
    return CommentModel.findByIdAndUpdate(input);
  }

export function removeComment(id: FilterQuery<IComment>) {
    return CommentModel.findByIdAndRemove(id);
  }

// 
// const Article = require("../models/Article");

// export class CommentService {
//     // constructor (private)
//     async getAll(){
//         try {
//             const allCommentReaction = await CommentModel.find();
//             return allCommentReaction;
//         } catch (error) {
//             console.log(`Could not fetch articles ${error}`)
//         }
//     }

//     static async addComment(data){
//         try {

//             const newComment = {
//                 title: data.title,
//                 body: data.body,
//                 article_image: data.article_image
//             }
//            const response = await new CommentModel(newComment).save();
//            return response;
//         } catch (error) {
//             console.log(error);
//         } 

//     }
//     // static async getArticlebyId(articleId){
//     //     try {
//     //         const singleArticleResponse =  await Article.findById({_id: articleId});
//     //         return singleArticleResponse;
//     //     } catch (error) {
//     //         console.log(`Article not found. ${error}`)
//     //     }
//     // }

//     async editComment(title, body, articleImage){
//             try {
//                 const editResponse =  await CommentModel.updateOne(
//                     {title, body, articleImage}, 
//                     {$set: {date: new Date.now()}});

//                     return editResponse;
//             } catch (error) {
//                 console.log(`Could not edit Comment ${error}` );

//         }
//     }

//     async removeComment(commentId: number){
//         try {
//             const removeResponse = await CommentModel.findByIdAndRemove(commentId);
//             return removeResponse;
//         } catch (error) {
//             console.log(`Could not remove comment ${error}`);
//         }

//     }
// }