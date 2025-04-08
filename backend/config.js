"use strict";

require("dotenv").config(); //loads environment variables from a .env file into process.env
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "development-key";

const PORT = +process.env.PORT || 3001; //sets the port for the server to run on. Checks if process.env.PORT is set and falls back to 3001 in local environment.  

// The logic below is for database set up (stretch goal). Determine the URI for the database connection based on the environment
function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "postgresql:///practice_tracker_test"
      : process.env.DATABASE_URL || "postgresql:///practice_tracker";
}

//Bcrypt hashing algorithm used to securely store passwords. 1 for test, 12 for production. 
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

//below is for debugging purposes. 
console.log("practice_tracker Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
