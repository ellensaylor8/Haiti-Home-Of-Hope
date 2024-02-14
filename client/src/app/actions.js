"use server";
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const productIds = {
  recurring: {
    generalFunds: "prod_PYfLQmWHys0kOy",
    hhhEducation: "prod_PYfL6Rff3Fplho",
    pignonEducation: "prod_PYYm3WUPcAO04d",
    pignonClinics: "prod_PYfLjmufv75rn9",
    housingFund: "prod_PYfLQSCU05lzKV",
  },
  oneTime: {
    generalFunds: "prod_PYfLaF0DGTz3e4",
    hhhEducation: "prod_PYfKeM0SFQe1oY",
    pignonEducation: "prod_PYYmcaQCZkQy9s",
    pignonClinics: "prod_PYfKRx2NLPSt7D",
    housingFund: "prod_PYYmQQQWhNnQbw",
  },
};

export async function createProduct(productName) {
  try {
    return await stripe.products.create({
      name: productName,
    });
  } catch (err) {
    console.error("Error creating product: ", err);
    return null;
  }
}

export async function createPrice(productPrice, interval, designation) {
  const frequency = interval === "oneTime" ? "oneTime" : "recurring";
  console.log(frequency, designation);
  const productId = productIds[frequency][designation];

  console.log("creating new price");
  const price = await stripe.prices.create({
    currency: "usd",
    product: productId,
    unit_amount: productPrice,
    recurring:
      interval === "oneTime"
        ? {}
        : {
            interval: interval,
          },
  });
  return price.id;
}

export async function createPaymentLink(priceId) {
  const paymentLink = await stripe.paymentLinks.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    // submit_type: interval === "oneTime" ? "donate" : "",
  });

  return paymentLink.url;
}
