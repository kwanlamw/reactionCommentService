"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.getComment = exports.createComment = void 0;
const comment_model_1 = __importDefault(require("../models/comment.model"));
function createComment(input) {
    return comment_model_1.default.create(input);
}
exports.createComment = createComment;
function getComment(query) {
    return comment_model_1.default.where(query);
}
exports.getComment = getComment;
function updateComment(input) {
    return comment_model_1.default.findByIdAndUpdate(input);
}
exports.updateComment = updateComment;
function deleteComment(id) {
    return comment_model_1.default.findByIdAndDelete(id);
}
exports.deleteComment = deleteComment;
