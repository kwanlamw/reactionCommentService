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
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const comment_controller_1 = require("../controllers/comment.controller");
const reaction_controller_1 = require("../controllers/reaction.controller");
exports.default = ({ app }) => {
    app.post("/api/userComment", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, user_controller_1.createUser)({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        const comment = yield (0, comment_controller_1.createComment)({
            text: req.body.petName,
            owner: user._id,
        });
        return res.send({ user, comment });
    }));
    app.get("/api/userReaction", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, user_controller_1.createUser)({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        const reaction = yield (0, reaction_controller_1.createReaction)({
            name: req.body.petName,
            owner: user._id,
        });
        return res.send({ user, reaction });
    }));
};
