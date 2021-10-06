import User from "../models/user.model";

export async function createUser({
  email,
  firstName,
  lastName,
//   gender,
//   address,
}: any) {
  const user = await User.create({
    email,
    // gender,
    firstName,
    lastName,
    // address,
  });

  return user;
}

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