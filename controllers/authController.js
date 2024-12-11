export const insertNewUser = (req, res, next) => {
  try {
    // to do signup process
    // receive the user data
    // encrypt the password
    // insert user in to DB

    // create an unique user activation link and send to their email
    res.json({
      status: "success",
      message: "User successfully registered",
    });
    // TODO Signup process
  } catch (error) {
    next(error);
  }
};
