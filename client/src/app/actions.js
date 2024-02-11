// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(
  "sk_test_51O5wQoLrTcClMeLC3evvBk96DRd1HNIfJFMazARTu07M5lb7Bm1xX9yyzsOrpL2iZAFkiARybp4qsB6NUq36LQ8x00qMah8vwI"
);

const productIds = {
  recurring: {
    generalFunds: "prod_PVHeyyjU9tiubh",
    hhhEducation: "prod_PXTRTYoezKmLb8",
    pignonEducation: "prod_PXZeVDz6HOvGrU",
    pignonClinics: "prod_PXTUYo7UOLXRbC",
    housingFund: "prod_PXTWonbwEbjS0Y",
  },
  oneTime: {
    generalFunds: "prod_Otk0s2jykX4AzM",
    hhhEducation: "prod_PXTXxckdnCIDoi",
    pignonEducation: "prod_PXZgJho8MUlcdG",
    pignonClinics: "prod_PXTYKGgthZyJzn",
    housingFund: "prod_PXTZ9s4spcPHPj",
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
