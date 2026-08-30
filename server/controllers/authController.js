import { asyncHandler } from "../middlewares/asyncHandler.js";
import { User } from "../models/user.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return next(new ErrorHandler("Please provide all required fields", 400));
  }
  let user = User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists", 400));
  }
  user = new User({ name, email, password, role });
  await user.save();

  //   res.status(201).json({
  //     success: true,
  //     message: "User registered successfully",
  //   });

  generateToken(user, 201, "User registered successfully", res);
});
