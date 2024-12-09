import userSchema from "./userSchema.js";

// insert new user
const createNewUser = (userObj) => {
  return userSchema(userObj).save();
};
