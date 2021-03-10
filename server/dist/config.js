"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = process.env.NODE_ENV || "development";
exports.default = {
    port: 5555,
    api: {
        prefix: "api",
    },
    MAX_ALLOWED_SESSION_DURATION: 14400,
    twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
    twilioApiKeySID: process.env.TWILIO_API_KEY_SID,
    twilioApiKeySecret: process.env.TWILIO_API_KEY_SECRET,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxDQUFDO0FBQzdELGtCQUFlO0lBQ2IsSUFBSSxFQUFFLElBQUk7SUFDVixHQUFHLEVBQUU7UUFDSCxNQUFNLEVBQUUsS0FBSztLQUNkO0lBQ0QsNEJBQTRCLEVBQUUsS0FBSztJQUNuQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQjtJQUNoRCxlQUFlLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0I7SUFDL0Msa0JBQWtCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUI7Q0FDdEQsQ0FBQyJ9