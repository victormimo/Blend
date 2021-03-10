require("dotenv").config();

export const config = {
  twilio: {
    sid: process.env.ACC_SID,
    token: process.env.ACC_TOKEN,
  },
};
