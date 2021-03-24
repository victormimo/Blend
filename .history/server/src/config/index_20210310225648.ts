require("dotenv").config();
import os from "os";
process.env.NODE_ENV = process.env.NODE_ENV || "development";
const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export default {
  port: parseInt(process.env.PORT as Number & string, 10),
  logs: { level: process.env.LOG_LEVEL || "debug" },
  api: {
    prefix: "/api",
  },
  hostname: process.env.HOSTNAME || "localhost:5555",
  MAX_ALLOWED_SESSION_DURATION: 14400,
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID || "",
  twilioApiKeySID: process.env.TWILIO_API_KEY_SID || "",
  twilioApiKeySecret: process.env.TWILIO_API_KEY_SECRET || "",
};
