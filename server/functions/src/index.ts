import * as functions from "firebase-functions";
import cors from "cors";
// const AccessToken = require("twilio").jwt.AccessToken;
import {jwt} from "twilio";
const {AccessToken} = jwt;
const {VideoGrant} = AccessToken;
import * as dotenv from "dotenv";
import express, {Response, Request} from "express";
import * as admin from "firebase-admin";

// initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);

// setting up dotenv parser
dotenv.config();

const app = express();

const MAX_ALLOWED_SESSION_DURATION = 14400;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID || "";
const twilioApiKeySID = process.env.TWILIO_API_KEY_SID || "";
const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET || "";

// exports.addRoom = functions.https.onRequest(app);

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
  const videoGrant = new VideoGrant({room: roomName});
  token.addGrant(videoGrant);

  const tokenJwt = token.toJwt();
  const dataToSend = {tokenString: tokenJwt};

  console.log(`issued token for ${identity} in room ${roomName}`);
  res.send(dataToSend);
});

// define google cloud function name
export const webApi = functions.https.onRequest(app);
