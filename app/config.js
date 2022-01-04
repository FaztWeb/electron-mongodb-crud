require("dotenv").config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/electrondb",
};
