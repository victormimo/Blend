import * as dotenv from "dotenv";
dotenv.config();

export default {
  MAX_ALLOWED_SESSION_DURATION: 14400,
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID || "",
  twilioApiKeySID: process.env.TWILIO_API_KEY_SID || "",
  twilioApiKeySecret: process.env.TWILIO_API_KEY_SECRET || "",
};
