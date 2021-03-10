require("dotenv").config();

export const config = {
  twillo: {
    sid: process.env.ACC_SID,
    token: process.env.ACC_TOKEN,
  },
};
