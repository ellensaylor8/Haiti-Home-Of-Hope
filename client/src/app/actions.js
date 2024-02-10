// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(
  "sk_test_51O5wQoLrTcClMeLC3evvBk96DRd1HNIfJFMazARTu07M5lb7Bm1xX9yyzsOrpL2iZAFkiARybp4qsB6NUq36LQ8x00qMah8vwI"
);

const productIds = {
  week: {
    generalFunds: "prod_PVHeyyjU9tiubh",
    education: "prod_PXTRTYoezKmLb8",
    pignonClinics: "prod_PXTUYo7UOLXRbC",
    housingFund: "prod_PXTWonbwEbjS0Y",
  },
  month: {
    generalFunds: "prod_PVHeyyjU9tiubh",
    education: "prod_PXTRTYoezKmLb8",
    pignonClinics: "prod_PXTUYo7UOLXRbC",
    housingFund: "prod_PXTWonbwEbjS0Y",
  },
  year: {
    generalFunds: "prod_PVHeyyjU9tiubh",
    education: "prod_PXTRTYoezKmLb8",
    pignonClinics: "prod_PXTUYo7UOLXRbC",
    housingFund: "prod_PXTWonbwEbjS0Y",
  },
  oneTime: {
    generalFunds: "prod_Otk0s2jykX4AzM",
    education: "prod_PXTXxckdnCIDoi",
    pignonClinics: "prod_PXTYKGgthZyJzn",
    housingFund: "prod_PXTZ9s4spcPHPj",
  },
};

const priceIds = {
  week: {},
  month: {
    generalFunds: {
      10: "price_1OiOwZLrTcClMeLCwgN1adeI",
      30: "",
      50: "price_1OhfTZLrTcClMeLCokTaeeER",
    },
    education: {
      10: "",
      30: "",
      50: "",
    },
    pignonClinics: {},
    housingFund: {},
  },
  year: {},
  oneTime: {
    generalFunds: {
      50: "",
    },
    education: {},
    pignonClinics: {},
    housingFund: {},
  },
};

const paymentLinks = {
  week: {},
  month: {
    generalFunds: {
      10: "https://buy.stripe.com/test_bIYaHacDt9oba7S8wF",
      30: "https://buy.stripe.com/test_cN2aHa32T57VfsceUY",
      50: "https://buy.stripe.com/test_14k6qU32TcAn1BmfZ4",
    },
    education: {
      10: "",
      30: "",
      50: "",
    },
    pignonClinics: {},
    housingFund: {},
  },
  year: {},
  oneTime: {
    generalFunds: {
      50: "https://buy.stripe.com/test_5kAbLe5b157Va7S28f",
    },
    education: {},
    pignonClinics: {},
    housingFund: {},
  },
};

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

export async function createPrice(productPrice, interval, designation) {
  const unitPrice = productPrice * 100;
  const productId = productIds[interval][designation];

  const preexistingPriceId = priceIds[interval][designation][unitPrice];
  if (preexistingPriceId) {
    return preexistingPriceId;
  } else {
    try {
      price = await stripe.prices.create({
        currency: "usd",
        product: productId,
        unit_amount: unitPrice,
        metadata: { designation: designation },
        recurring:
          interval === "oneTime"
            ? {}
            : {
                interval: interval,
              },
      });
      return price.id;
    } catch (err) {
      console.error("error creating price: ", err);
      return null;
    }
  }
}

export async function createPaymentLink(priceId, interval, designation) {
  let paymentLink;
  const preexistingPaymentLink = paymentLinks[interval][designation][priceId];
  if (preexistingPaymentLink) {
    paymentLink = preexistingPaymentLink;
  } else {
    try {
      paymentLink = await stripe.paymentLinks.create({
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        submit_type: interval === "oneTime" ? "donate" : "",
        metadata: { designation: designation },
      });
    } catch (err) {
      paymentLink = null;
      console.error("error creating payment link: ", err);
    }
  }
  return paymentLink;
}
