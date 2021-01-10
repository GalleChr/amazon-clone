const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I7nqfI28w4Xl8cch1iOiVMcLXazVfLo9x5dt5wDGDKhkpufbBunExxHM2fjgj7aUhidtaWOHfX1lSwQqPWiL5Bm00DJwHBXxC"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
api.get("/", (request, response) => response.status(200).send("Hello world"));

// Listen command
exports.api = functions.https.onRequest(app);
