const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const {response} = require("express");
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
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOOM!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-ea5b2/us-central1/api
