import * as functions from "firebase-functions";
import createAndGetTwilloRoomJWT from "./createAccessToken";
import { parseRequestQueryParams } from "./utils";
import express, { json, urlencoded } from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
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
export const getRoomToken = functions.https.onRequest(app);
