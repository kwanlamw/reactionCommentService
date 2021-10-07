"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = void 0;
const comment_model_1 = __importDefault(require("../models/comment.model"));
function createComment({ text, owner, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = yield comment_model_1.default.create({
            text,
            owner,
        });
        return comment;
    });
}
exports.createComment = createComment;
// export class commentController {
//   constructor (private Comment:commentService) {}
//   addComment = async (req: any, res: any) => {
//     try {
//         // const userID = req.user?.id;
//         // let listItems;
//         // if (userID) {
//         //     listItems = await this.commentService.getListItemsByUserID(req.user?.id as number);
//         //     // may also need to include group ide 
//         // }
//         // // console.log("UserID",userID)
//         // res.json({ listItems });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ message: "Error in addComment of controller" });
//     }
// };
// }
