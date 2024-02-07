import Script from "next/script";

export default function PayPalButton() {
  return (
    <div>
      <Script
        src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
        onLoad={() => {
          PayPal.Donation.Button({
            env: "production",
            hosted_button_id: "7HCSDNAQZYVGN",
            image: {
              src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
              alt: "Donate with PayPal button",
              title: "PayPal - The safer, easier way to pay online!",
            },
          }).render("#donate-button");
        }}
      />
      <div id="donate-button-container">
        <div id="donate-button"></div>
      </div>
    </div>
  );
}
