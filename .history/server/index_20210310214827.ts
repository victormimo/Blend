const app = express();
import path from "path";
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const cors = require("cors");
import express from "express";
import path from "path";
require("dotenv").config();

const MAX_ALLOWED_SESSION_DURATION = 14400;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKeySID = process.env.TWILIO_API_KEY_SID;
const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;

app.use(express.static(path.join(__dirname, "build")));

app.get("/token", cors(), (req: Request, res: Response) => {
  const { identity, roomName } = req.query;
  console.log(`identity ${identity}, roomName ${roomName}`);
  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKeySID,
    twilioApiKeySecret,
    {
      ttl: MAX_ALLOWED_SESSION_DURATION,
    }
  );

  token.identity = identity;
  const videoGrant = new VideoGrant({ room: roomName });
  token.addGrant(videoGrant);

  const tokenJwt = token.toJwt();
  const dataToSend = { tokenString: tokenJwt };

  res.send(dataToSend);
  console.log(`issued token for ${identity} in room ${roomName}`);
});

app.listen(8081, () => console.log("token server running on 8081"));
