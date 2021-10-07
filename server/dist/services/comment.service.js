"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeComment = exports.editComment = exports.getComment = exports.addComment = void 0;
const comment_model_1 = __importDefault(require("../models/comment.model"));
function addComment(input) {
    return comment_model_1.default.create(input);
}
exports.addComment = addComment;
function getComment(query) {
    return comment_model_1.default.where(query);
}
exports.getComment = getComment;
function editComment(input) {
    return comment_model_1.default.findByIdAndUpdate(input);
}
exports.editComment = editComment;
function removeComment(id) {
    return comment_model_1.default.findByIdAndRemove(id);
}
exports.removeComment = removeComment;
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
