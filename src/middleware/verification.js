import SibApiV3Sdk from "sib-api-v3-sdk";

let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = import.meta.env.VITE_EMAIL_KEY; // Replace with your Brevo API key

// const otpVerify = (name, email, OTP) => {
//   console.log(import.meta.env.VITE_EMAIL_KEY);

//   console.log(OTP);
//   // Define the transactional email API instance
//   let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
//   // Define your email data
//   let sendSmtpEmail = {
//     to: [
//       {
//         email: email, // Replace with recipient's email address
//         name: name, // Optional recipient's name
//       },
//     ],
//     sender: {
//       email: "aadi.chaurasia90@gmail.com", // Replace with your verified email address
//       name: "Unvibie", // Optional sender's name
//     },
//     subject: "Test email from Brevo",
//     textContent: "OTP Verification Code !",
//     htmlContent: `<strong>Hello , ${name} your OTP is <i>${OTP}</i></strong>`,
//   };

//   // Send the email
//   apiInstance.sendTransacEmail(sendSmtpEmail).then(
//     function (data) {
//       return true;
//     },
//     function (error) {
//       console.log(error);
//       return false;
//     },
//   );
// };

const otpVerify = (name, email, OTP) => {
  console.log(OTP);
  // Define your email data
  var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
  var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
  emailCampaigns.name = "Campaign sent via the API";
  emailCampaigns.subject = "My subject";
  emailCampaigns.sender = {
    name: "Unvibie", // Optional sender's name
    email: "aadi.chaurasia90@gmail.com", // Replace with your verified email address
  };
  emailCampaigns.type = "classic";
  htmlContent: `<strong>Hello , ${name} your OTP is <i>${OTP}</i></strong> `;
  recipients: {
    listIds: [2, 7];
  }
  scheduledAt: "2018-01-01 00:00:01";
  apiInstance.createEmailCampaign(emailCampaigns).then(
    function (data) {},
    function (error) {
      console.error(error);
    },
  );
};

export default otpVerify;
