export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const donationInDollars = searchParams.get("donationInDollars");
  const donationFrequency = searchParams.get("donationInDollars");
  const donationDesignation = searchParams.get("donationDesignation");
  const res = await fetch(
    `https://us-central1-haiti-home-of-hope.cloudfunctions.net/createPaymentLink/?donationInDollars=${donationInDollars}&donationFrequency=${donationFrequency}&donationDesignation=${donationDesignation}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(res);
  return res;
}
