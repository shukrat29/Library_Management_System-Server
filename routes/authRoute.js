import express from "express";

const router = express.Router();

// user signup
router.post("/register", (req, res, next) => {
  try {
    res.json({
      message: "User successfully registered",
    });
    // TODO Signup process
  } catch (error) {
    next(error);
  }
});

export default router;
