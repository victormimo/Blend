import cors from "cors";
import express, { Request, Response } from "express";
import { jwt } from "twilio";
import config from "./config";
const app = express();

const { AccessToken } = jwt;
const { VideoGrant } = AccessToken;
const {
  MAX_ALLOWED_SESSION_DURATION,
  twilioAccountSid,
  twilioApiKeySID,
  twilioApiKeySecret,
} = config;

app.get("/token", cors(), (req: Request, res: Response) => {
  const { identity, roomName } = req.query as {
    identity: string | undefined;
    roomName: string | undefined;
  };

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
import "reflect-metadata";
import loader from "./loaders";
import express from "express";
import config from "./config";
import Logger from "./loaders/logger";
export default async () => {
  try {
    await loader({ expressApp: app, httpServer });
    httpServer.listen(config.port, () => {
      Logger.info(`\n
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    });
  } catch (e) {
    Logger.error(e.message);
  }
};
