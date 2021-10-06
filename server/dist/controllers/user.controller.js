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
exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
function createUser({ email, firstName, lastName, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield user_model_1.default.create({
            email,
            firstName,
            lastName,
        });
        return user;
    });
}
exports.createUser = createUser;
// import User from '../models/User'
// import {Request, Response} from 'express'
// import { prop, getModelForClass } from "@typegoose/typegoose";
// // enum Gender {
// //   male = "male",
// //   female = "female",
// //   undisclosed = "undisclosed",
// // }
// // class Address {
// //   @prop({ type: () => String })
// //   street: string;
// //   @prop({ type: () => String })
// //   city: string;
// //   @prop({ type: () => String })
// //   postCode: string;
// // }
// export class User {
//   // Mongoose validation goes inside the @Props arguments
//   @prop({ type: () => String, required: true, unique: true })
//   User.email: string;
//   @prop({ type: () => String, required: true })
//   firstName: string;
//   @prop({ type: () => String, required: true })
//   lastName: string;
//   // Enum of values male, female or undisclosed
//   // @prop({ type: () => String, enum: Object.values(Gender) })
//   // gender: string;
//   // Embedded sub doccument
//   // @prop({ type: () => Address })
//   // address: Address;
// }
// const UserModel = getModelForClass(User);
// export default UserModel;
