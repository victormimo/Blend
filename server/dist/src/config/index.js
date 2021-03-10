"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
process.env.NODE_ENV = process.env.NODE_ENV || "development";
var envFound = dotenv_1.default.config();
if (envFound.error) {
    throw new Error("Couldn't find .env file");
}
exports.default = {
    port: parseInt(process.env.PORT, 10),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTRCO0FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQztBQUM3RCxJQUFNLFFBQVEsR0FBRyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWpDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtJQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Q0FDNUM7QUFFRCxrQkFBZTtJQUNiLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUF1QixFQUFFLEVBQUUsQ0FBQztJQUN2RCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksT0FBTyxFQUFFO0lBQ2pELEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxNQUFNO0tBQ2Y7SUFDRCxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksZ0JBQWdCO0lBQ2xELDRCQUE0QixFQUFFLEtBQUs7SUFDbkMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSxFQUFFO0lBQ3RELGVBQWUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLEVBQUU7SUFDckQsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxFQUFFO0NBQzVELENBQUMifQ==