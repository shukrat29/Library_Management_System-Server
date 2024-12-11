import { createNewUser } from "../models/userModel.js";
import { hashPassword } from "../utils/bcrypt.js";

export const insertNewUser = async (req, res, next) => {
  try {
    const { password } = req.body;
    req.body.password = hashPassword(password);
    // insert user in to DB
    const user = await createNewUser(req.body);

    if (user?._id) {
      res.json({
        status: "success",
      });
      return;
    }
    // create an unique user activation link and send to their email
    res.json({
      status: "error",
      message: "Unable to create an account, try again later",
    });
  } catch (error) {
    next(error);
  }
};
