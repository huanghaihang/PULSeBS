// Import database
const knex = require("./../db");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

const expireTime = 30 * 60;

// Get user data.
exports.get = async (req, res) => {
  const userId = req.user && req.user.id;
  knex
    .select("id", "name", "surname", "email", "role")
    .from("user")
    .where("id", userId)
    .then((userDetails) => {
      res.json(userDetails);
    })
    .catch((err) => {
      res.json({
        message: `There was an error retrieving the details about the user: ${err}`,
      });
    });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  knex
    .select("id", "email", "password_hash", "role")
    .from("user")
    .where("email", email)
    .then((queryResults) => {
      if (queryResults.length == 1) {
        userDetails = queryResults[0];
        if (bcrypt.compareSync(password, userDetails.password_hash)) {
          const token = jsonwebtoken.sign({ user: userDetails.id }, jwtSecret, {
            expiresIn: expireTime,
          });
          res.cookie("token", token, {
            httpOnly: true,
            sameSite: true,
            maxAge: 1000 * expireTime,
          });

          res.json({
            id: userDetails.id,
            email: userDetails.email,
            role: userDetails.role,
          });
        }
      } else {
        throw new Error("Invalid credentials.");
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: `There was an error checking credentials: ${err}` });
    });
};

exports.logout = async (req, res) => {
  res.clearCookie("token").end();
};
