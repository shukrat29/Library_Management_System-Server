import sessionSchema from "./sessionSchema.js";

// insert new session
export const createNewSession = (sessionObj) => {
  return sessionSchema(sessionObj).save();
};
