import * as functions from "firebase-functions";
// import cors from "cors";
import * as dotenv from "dotenv";
// import express, { Response, Request, urlencoded, json } from "express";
// // import * as admin from "firebase-admin";
import { jwt } from "twilio";
const { AccessToken } = jwt;
const { VideoGrant } = AccessToken;

// initialize firebase inorder to access its services
// admin.initializeApp(functions.config().firebase);

// setting up dotenv parser
dotenv.config();

// const app = express();
// // const main = express();

// app.use(urlencoded({ extended: true }));
// // app.enable("trust proxy");
// app.use(json());
// // app.use(cors({ origin: true }));

// // initialize the database and the collection
// // const db = admin.firestore();
// // const userCollection = "users";

const MAX_ALLOWED_SESSION_DURATION = 14400;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID || "";
const twilioApiKeySID = process.env.TWILIO_API_KEY_SID || "";
const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET || "";

// // exports.addRoom = functions.https.onRequest(app);
// app.get("", (_, res) => {
//   res.write("hello");
//   res.end();
// });

// app.get("token", (req: Request, res: Response) => {
//   try {
//     const identity = req.query.identity as string;
//     const roomName = req.query.roomName as string;

//     console.log(`identity ${identity}, roomName ${roomName}`);

//     const token = new AccessToken(
//       twilioAccountSid,
//       twilioApiKeySID,
//       twilioApiKeySecret,
//       {
//         ttl: MAX_ALLOWED_SESSION_DURATION,
//       }
//     );

//     token.identity = identity;
//     const videoGrant = new VideoGrant({ room: roomName });
//     token.addGrant(videoGrant);

//     const tokenJwt = token.toJwt();
//     const dataToSend = { tokenString: tokenJwt };

//     console.log(`issued token for ${identity} in room ${roomName}`);
//     // res.send({
//     // success: true,
//     // message: { twilioAccountSid, twilioApiKeySID, twilioApiKeySecret },
//     // });
//     res.send(dataToSend);
//   } catch (e) {
//     res.send({ success: false, error: e });
//   }
// });

// define google cloud function name
export const getRoomToken = functions.https.onRequest((req, res) => {
  console.log("something happeend");
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
