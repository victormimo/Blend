import * as functions from "firebase-functions";
import * as dotenv from "dotenv";
import { jwt } from "twilio";
const { AccessToken } = jwt;
const { VideoGrant } = AccessToken;
import config from "./config";
dotenv.config();

const {
  MAX_ALLOWED_SESSION_DURATION,
  twilioAccountSid,
  twilioApiKeySID,
  twilioApiKeySecret,
} = config;

export const getRoomToken = functions.https.onRequest((req, res) => {
  try {
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
    const videoGrant = new VideoGrant({ room: roomName });
    token.addGrant(videoGrant);

    const tokenJwt = token.toJwt();
    const dataToSend = { tokenString: tokenJwt };

    console.log(`issued token for ${identity} in room ${roomName}`);
    res.send(dataToSend);
  } catch (e) {
    res.send({ success: false, error: e });
  }
});
