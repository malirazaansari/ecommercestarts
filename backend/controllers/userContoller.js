import asyncHandler from "../middlewares/asyncHandler.js";

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (username || email || password) {
    throw new Error("please fill all required fields ");
  }
});
export { createUser };
