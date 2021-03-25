import AccessToken, { VideoGrant } from "twilio/lib/jwt/AccessToken";
import config from "./config";
const createAndGetTwilloRoomJWT = (identity: string, room: string) => {
  const token = createNewAccessToken(identity);
  const videoGrant = createNewVideoGrant(room);
  token.addGrant(videoGrant);
  return getTokenJWT(token);
};

const createNewAccessToken = (identity: string) => {
  const {
    MAX_ALLOWED_SESSION_DURATION,
    twilioAccountSid,
    twilioApiKeySID,
    twilioApiKeySecret,
  } = config;

  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKeySID,
    twilioApiKeySecret,
    {
      ttl: MAX_ALLOWED_SESSION_DURATION,
    }
  );
  token.identity = identity;
  return token;
};

const createNewVideoGrant = (room: string) => {
  return new VideoGrant({ room });
};

const getTokenJWT = (token: any) => ({
  tokenString: token.toJwt(),
});

export default createAndGetTwilloRoomJWT;
