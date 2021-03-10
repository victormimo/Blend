"use strict";
// import cors from "cors";
// import { jwt } from "twilio";
// const app = express();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { AccessToken } = jwt;
// const { VideoGrant } = AccessToken;
// const {
//   MAX_ALLOWED_SESSION_DURATION,
//   twilioAccountSid,
//   twilioApiKeySID,
//   twilioApiKeySecret,
// } = config;
// app.get("/token", cors(), (req: Request, res: Response) => {
//   const { identity, roomName } = req.query as {
//     identity: string | undefined;
//     roomName: string | undefined;
//   };
//   console.log(`identity ${identity}, roomName ${roomName}`);
//   const token = new AccessToken(
//     twilioAccountSid,
//     twilioApiKeySID,
//     twilioApiKeySecret,
//     {
//       ttl: MAX_ALLOWED_SESSION_DURATION,
//     }
//   );
//   token.identity = identity;
//   const videoGrant = new VideoGrant({ room: roomName });
//   token.addGrant(videoGrant);
//   const tokenJwt = token.toJwt();
//   const dataToSend = { tokenString: tokenJwt };
//   res.send(dataToSend);
//   console.log(`issued token for ${identity} in room ${roomName}`);
// });
// app.listen(8081, () => console.log("token server running on 8081"));
require("reflect-metadata");
var loaders_1 = __importDefault(require("./loaders"));
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config"));
var logger_1 = __importDefault(require("./loaders/logger"));
var app = express_1.default();
exports.default = (function () { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, loaders_1.default({ expressApp: app })];
            case 1:
                _a.sent();
                app.listen(config_1.default.port, function () {
                    logger_1.default.info("\n\n      ################################################\n      \uD83D\uDEE1\uFE0F  Server listening on port: " + config_1.default.port + " \uD83D\uDEE1\uFE0F\n      ################################################\n    ");
                });
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                logger_1.default.error(e_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJCQUEyQjtBQUMzQixnQ0FBZ0M7QUFDaEMseUJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QiwrQkFBK0I7QUFDL0Isc0NBQXNDO0FBQ3RDLFVBQVU7QUFDVixrQ0FBa0M7QUFDbEMsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEIsY0FBYztBQUVkLCtEQUErRDtBQUMvRCxrREFBa0Q7QUFDbEQsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxPQUFPO0FBRVAsK0RBQStEO0FBQy9ELG1DQUFtQztBQUNuQyx3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQixRQUFRO0FBQ1IsMkNBQTJDO0FBQzNDLFFBQVE7QUFDUixPQUFPO0FBRVAsK0JBQStCO0FBQy9CLDJEQUEyRDtBQUMzRCxnQ0FBZ0M7QUFFaEMsb0NBQW9DO0FBQ3BDLGtEQUFrRDtBQUVsRCwwQkFBMEI7QUFDMUIscUVBQXFFO0FBQ3JFLE1BQU07QUFFTix1RUFBdUU7QUFDdkUsNEJBQTBCO0FBQzFCLHNEQUErQjtBQUMvQixvREFBOEI7QUFDOUIsb0RBQThCO0FBQzlCLDREQUFzQztBQUN0QyxJQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFDdEIsbUJBQWU7Ozs7OztnQkFFWCxxQkFBTSxpQkFBTSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUE7O2dCQUFqQyxTQUFpQyxDQUFDO2dCQUNsQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFNLENBQUMsSUFBSSxFQUFFO29CQUN0QixnQkFBTSxDQUFDLElBQUksQ0FBQyxxSEFFcUIsZ0JBQU0sQ0FBQyxJQUFJLHNGQUU3QyxDQUFDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Ozs7Z0JBRUgsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7OztLQUUzQixFQUFDIn0=