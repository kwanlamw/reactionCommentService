"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeReaction = exports.editReaction = exports.getReaction = exports.addReaction = void 0;
const reaction_model_1 = __importDefault(require("../models/reaction.model"));
function addReaction(input) {
    return reaction_model_1.default.create(input);
}
exports.addReaction = addReaction;
function getReaction(query) {
    return reaction_model_1.default.where(query);
}
exports.getReaction = getReaction;
function editReaction(input) {
    return reaction_model_1.default.findByIdAndUpdate(input);
}
exports.editReaction = editReaction;
function removeReaction(id) {
    return reaction_model_1.default.findByIdAndRemove(id);
}
exports.removeReaction = removeReaction;
