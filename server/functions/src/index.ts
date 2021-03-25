import * as functions from "firebase-functions";
import * as dotenv from "dotenv";
import { jwt } from "twilio";
const { AccessToken } = jwt;
const { VideoGrant } = AccessToken;
import createAndGetTwilloRoomJWT from "./createAccessToken";
import { parseRequestQueryParams } from "./utils";
dotenv.config();

export const getRoomToken = functions.https.onRequest((req, res) => {
  try {
    const { identity, roomName } = parseRequestQueryParams(req);

    console.log(`identity ${identity}, roomName ${roomName}`);

    const tokenToSend = createAndGetTwilloRoomJWT(identity, roomName);

    console.log(`issued token for ${identity} in room ${roomName}`);
    res.send(tokenToSend);
  } catch (e) {
    res.send({ success: false, error: e });
  }
});
