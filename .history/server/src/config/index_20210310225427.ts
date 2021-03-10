require("dotenv").config();

export default {
  port: Number(process.env.PORT) || 5555,
  api: {
    prefix:"api"
  }
  MAX_ALLOWED_SESSION_DURATION: 14400,
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID || "",
  twilioApiKeySID: process.env.TWILIO_API_KEY_SID || "",
  twilioApiKeySecret: process.env.TWILIO_API_KEY_SECRET || "",
};
