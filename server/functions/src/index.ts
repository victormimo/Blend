import * as functions from "firebase-functions";
// import createAndGetTwilloRoomJWT from "./createAccessToken";
// import { getRequestQueryParams } from "./utils";
// import express, { json, urlencoded, Response, Request } from "express";
import cors from "cors";

// const app = express();

// app.use(json());
// app.use(urlencoded({ extended: true }));
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const corsOrigin = cors(corsOptions);
// app.get("/", (req: Request, res: Response) => {
//   try {
//     if (req.method === "POST" || req.method === "PUT") {
//       res.status(403).send("forbidden!");
//     }

//     const { identity, roomName } = getRequestQueryParams(req);

//     console.log(`identity ${identity}, roomName ${roomName}`);

//     const tokenToSend = createAndGetTwilloRoomJWT(identity, roomName);

//     console.log(`issued token for ${identity} in room ${roomName}`);
//     res.send(tokenToSend);
//   } catch (e) {
//     console.log(`Error: ${e}`);
//     res.send({ success: false, error: e });
//   }
// });
// export const getRoomToken = functions.https.onRequest(app);
export const getRoomToken = functions.https.onRequest((req, res) => {
  return corsOrigin(req, res, () => {
    res.status(200).send("Hello World");
  });
});
