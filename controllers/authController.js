import { responseClient } from "../middleware/responseClient.js";
import { createNewUser } from "../models/userModel.js";
import { hashPassword } from "../utils/bcrypt.js";

export const insertNewUser = async (req, res, next) => {
  try {
    const { password } = req.body;
    req.body.password = hashPassword(password);
    // insert user in to DB
    const user = await createNewUser(req.body);

    if (user?._id) {
      // create an unique user activation link and send to their email
      const message =
        "We have sent and activation link please check your email and follow instructions to activate your account";
      return responseClient(req, res, message);
    }

    throw new Error("Unable to create an account, try again later");
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message = "The email already exist";
      error.statusCode = 400;
    }
    next(error);
  }
};
