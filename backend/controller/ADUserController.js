const ADUserModel = require("../model/ADUserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getUserById = async (req, res) => {
  try {
    const { user_id } = req.user;

    const userId = await ADUserModel.getUserById(user_id);

    if (!userId) {
      return res
        .status(404)
        .json({ message: "[GET /UserController]: User not found!" });
    }

    res.status(200).json({
      message: "[GET /UserController]: User id found!",
      data: userId,
    });
  } catch (err) {
    console.error(
      "[GET /UserController]: Error fetching user id!",
      err.message
    );
    res.status(500).json({ error: "[GET /UserController]: Server error!" });
  }
};

const logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "[POST /UserController]: Email and Password required!",
      });
    }

    const userEmail = await ADUserModel.getUserByEmail(email);

    if (!userEmail) {
      return res
        .status(404)
        .json({ message: "[POST /UserController]: User not found!" });
    }

    const isMatch = await bcrypt.compare(password, userEmail.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "[POST /UserController]: Invalid credentials!" });
    }

    const SECRET_KEY = process.env.JWT_SECRET || "superSecret123";
    const token = jwt.sign({ user_id: userEmail.user_id }, SECRET_KEY, {
      expiresIn: "2h",
    });

    const userResponse = {
      user_id: userEmail.user_id,
      username: userEmail.username,
      email: userEmail.email,
      tool_id: userEmail.tool_id,
      artstyle_id: userEmail.artstyle_id,
    };

    res.status(200).json({
      message: "[POST /UserController]: Log in successful!",
      token,
      user: userResponse,
    });
  } catch (err) {
    console.error("[POST /UserController]: Error logging in user!");
    res.status(500).json({ error: "[POST /UserController]: Server error!" });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, password, bio, location, tool_id, artstyle_id } =
      req.body;

    const newUser = await ADUserModel.createUser(
      username,
      email,
      password,
      bio,
      location,
      tool_id,
      artstyle_id
    );

    if (newUser.password) delete newUser.password;

    const SECRET_KEY = process.env.JWT_SECRET || "superSecret123";
    const token = jwt.sign({ user_id: newUser.user_id }, SECRET_KEY, {
      expiresIn: "2h",
    });

    res.status(201).json({
      message: "[POST /UserController]: New user created!",
      token,
      user: newUser,
    });
  } catch (err) {
    console.error("[POST /UserController]: Error creating user!", err.message);
    res.status(500).json({ error: "[POST /UserController]: Server error!" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { username, email, password, bio, location, tool_id, artstyle_id } =
      req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const updatedUser = await ADUserModel.updateUser(
      user_id,
      username,
      email,
      hashedPassword,
      bio,
      location,
      tool_id,
      artstyle_id
    );

    res.status(200).json({
      message: "[PUT /UserController]: User Updated!",
      data: updatedUser,
    });
  } catch (err) {
    console.error("[PUT /UserController]: Error Updating User!", err.message);
    res.status(500).json({ error: "[PUT /UserController]: Server error!" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const deletedUser = await ADUserModel.deleteUser(user_id);
    res.status(200).json({
      message: "[DELETE /UserController]: User deleted!",
      data: deletedUser,
    });
  } catch (err) {
    console.error(
      "[DELETE /UserController]: Error Deleting User!",
      err.message
    );
    res.status(500).json({ error: "[DELETE /UserController]: Server error!" });
  }
};

module.exports = {
  getUserById,
  logInUser,
  createUser,
  updateUser,
  deleteUser,
};
