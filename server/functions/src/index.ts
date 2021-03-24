import * as functions from "firebase-functions";
import cors from "cors";
// const AccessToken = require("twilio").jwt.AccessToken;
import {jwt} from "twilio";
const {AccessToken} = jwt;
const {VideoGrant} = AccessToken;
import {config} from "dotenv";
import express, {Response, Request} from "express";

config();

const app = express();

const MAX_ALLOWED_SESSION_DURATION = 14400;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID || "";
const twilioApiKeySID = process.env.TWILIO_API_KEY_SID || "";
const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET || "";

exports.addRoom = functions.https.onRequest(app);

app.get("/token", cors(), (req: Request, res: Response) => {
  const identity = req.query.identity as string;
  const roomName = req.query.roomName as string;
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
  token.identity = identity;
  const videoGrant = new VideoGrant({room: roomName});
  token.addGrant(videoGrant);

  const tokenJwt = token.toJwt();
  const dataToSend = {tokenString: tokenJwt};

  res.send(dataToSend);
  console.log(`issued token for ${identity} in room ${roomName}`);
});
