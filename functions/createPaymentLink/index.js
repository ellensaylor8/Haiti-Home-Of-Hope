const functions = require("@google-cloud/functions-framework");
const helperFunctions = require("./functions");

functions.http("createPaymentLink", async (req, res) => {
  // Set CORS headers for preflight requests
  // Allows GETs from any origin with the Content-Type header
  // and caches preflight response for 3600s

  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    // Send response to OPTIONS requests
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
  } else {
    try {
      const donationInDollars = req.query.donationInDollars;
      const donationFrequency = req.query.donationFrequency;
      const designation = req.query.donationDesignation;

      const priceId = await helperFunctions.createPrice(
        donationInDollars,
        donationFrequency,
        designation
      );

      const paymentLink = await helperFunctions.createPaymentLinks(
        priceId,
        donationFrequency,
        designation
      );
      res.send(paymentLink);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error creating payment link");
    }
  }
});
