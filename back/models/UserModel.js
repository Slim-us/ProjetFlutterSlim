import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    stakes: [{
      type: Schema.Types.ObjectId,
      ref: "Staking"
    }],
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", userSchema);
export default UserModel;
