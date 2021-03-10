"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var twilio_1 = require("twilio");
var config_1 = __importDefault(require("./config"));
var app = express_1.default();
var AccessToken = twilio_1.jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
var MAX_ALLOWED_SESSION_DURATION = config_1.default.MAX_ALLOWED_SESSION_DURATION, twilioAccountSid = config_1.default.twilioAccountSid, twilioApiKeySID = config_1.default.twilioApiKeySID, twilioApiKeySecret = config_1.default.twilioApiKeySecret;
app.get("/token", cors_1.default(), function (req, res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBd0I7QUFDeEIsb0RBQXFEO0FBQ3JELGlDQUE2QjtBQUM3QixvREFBOEI7QUFDOUIsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBRWQsSUFBQSxXQUFXLEdBQUssWUFBRyxZQUFSLENBQVM7QUFDcEIsSUFBQSxVQUFVLEdBQUssV0FBVyxXQUFoQixDQUFpQjtBQUVqQyxJQUFBLDRCQUE0QixHQUkxQixnQkFBTSw2QkFKb0IsRUFDNUIsZ0JBQWdCLEdBR2QsZ0JBQU0saUJBSFEsRUFDaEIsZUFBZSxHQUViLGdCQUFNLGdCQUZPLEVBQ2Ysa0JBQWtCLEdBQ2hCLGdCQUFNLG1CQURVLENBQ1Q7QUFFWCxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxjQUFJLEVBQUUsRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzlDLElBQUEsS0FBeUIsR0FBRyxDQUFDLEtBR2xDLEVBSE8sUUFBUSxjQUFBLEVBQUUsUUFBUSxjQUd6QixDQUFDO0lBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFZLFFBQVEsbUJBQWMsUUFBVSxDQUFDLENBQUM7SUFDMUQsSUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQzNCLGdCQUFnQixFQUNoQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCO1FBQ0UsR0FBRyxFQUFFLDRCQUE0QjtLQUNsQyxDQUNGLENBQUM7SUFFRixLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixJQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFM0IsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLElBQU0sVUFBVSxHQUFHLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBRTdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBb0IsUUFBUSxpQkFBWSxRQUFVLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FBQyJ9