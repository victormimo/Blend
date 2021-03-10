"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var twilio_1 = require("twilio");
var AccessToken = twilio_1.jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
var cors = require("cors");
var express_1 = __importDefault(require("express"));
var app = express_1.default();
require("dotenv").config();
var MAX_ALLOWED_SESSION_DURATION = 14400;
var twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
var twilioApiKeySID = process.env.TWILIO_API_KEY_SID;
var twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;
app.use(express_1.default.static(path_1.default.join(__dirname, "build")));
app.get("/token", cors(), function (req, res) {
    var _a = req.query, identity = _a.identity, roomName = _a.roomName;
    console.log("identity " + identity + ", roomName " + roomName);
    var token = new AccessToken(twilioAccountSid, twilioApiKeySID, twilioApiKeySecret, {
        ttl: MAX_ALLOWED_SESSION_DURATION,
    });
    token.identity = identity;
    var videoGrant = new VideoGrant({ room: roomName });
    token.addGrant(videoGrant);
    var tokenJwt = token.toJwt();
    var dataToSend = { tokenString: tokenJwt };
    res.send(dataToSend);
    console.log("issued token for " + identity + " in room " + roomName);
});
app.listen(8081, function () { return console.log("token server running on 8081"); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF3QjtBQUN4QixpQ0FBNkI7QUFDckIsSUFBQSxXQUFXLEdBQUssWUFBRyxZQUFSLENBQVM7QUFFNUIsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQztBQUMxQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0Isb0RBQThCO0FBQzlCLElBQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFM0IsSUFBTSw0QkFBNEIsR0FBRyxLQUFLLENBQUM7QUFDM0MsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0FBQ3hELElBQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7QUFDdkQsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO0FBRTdELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXZELEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDOUMsSUFBQSxLQUF5QixHQUFHLENBQUMsS0FBSyxFQUFoQyxRQUFRLGNBQUEsRUFBRSxRQUFRLGNBQWMsQ0FBQztJQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQVksUUFBUSxtQkFBYyxRQUFVLENBQUMsQ0FBQztJQUMxRCxJQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FDM0IsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEI7UUFDRSxHQUFHLEVBQUUsNEJBQTRCO0tBQ2xDLENBQ0YsQ0FBQztJQUVGLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLElBQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUzQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsSUFBTSxVQUFVLEdBQUcsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFFN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFvQixRQUFRLGlCQUFZLFFBQVUsQ0FBQyxDQUFDO0FBQ2xFLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDIn0=