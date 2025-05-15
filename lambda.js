// lambda.js
// This file is used to deploy the Express API to AWS Lambda
// Do not delete this file when using RockoAI one click deploy

const serverless = require("serverless-http");
const app = require("./app");

module.exports.handler = serverless(app);
