// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(
  "sk_test_51O5wQoLrTcClMeLC3evvBk96DRd1HNIfJFMazARTu07M5lb7Bm1xX9yyzsOrpL2iZAFkiARybp4qsB6NUq36LQ8x00qMah8vwI"
);

const recurrindgDonationProductId = "prod_PVHeyyjU9tiubh";
const oneTimeDonationProductId = "prod_Otk0s2jykX4AzM";

export async function createProduct() {
  let product;
  try {
    console.log("in create product");
    product = await stripe.products.create({
      name: "Recurring Donation Test from client",
    });
  } catch (err) {
    product = null;
    console.error("Error creating product: ", err);
  }
  console.log("product: ", product);
  return product;
}

export async function createPrice(productPrice, interval) {
  const unitPrice = productPrice * 100;
  const productId =
    interval === "oneTime"
      ? oneTimeDonationProductId
      : recurrindgDonationProductId;
  const type = interval === "oneTime" ? "one_time" : "recurring";
  // To-DO check if price and interval already exist

  let price;
  try {
    price = await stripe.prices.create({
      currency: "usd",
      product: productId,
      unit_amount: unitPrice,
      recurring:
        interval === "oneTime"
          ? {}
          : {
              interval: interval,
            },
    });
  } catch (err) {
    price = null;
    console.error("error creating price: ", err);
  }
  console.log(price);
  return price;
}

export async function createPaymentLink(priceId) {
  console.log("price id: ", priceId);
  let paymentLink;
  try {
    paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
    });
  } catch (err) {
    paymentLink = null;
    console.error("error creating payment link: ", err);
  }
  return paymentLink;
}
