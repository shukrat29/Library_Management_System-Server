import { required, types } from "joi";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    refreshJWT: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// const userModel = mongoose.model("User", userSchema);
// export default userModel;

export default mongoose.model("User", userSchema);
