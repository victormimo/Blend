import { Request } from "express";

export const parseRequestQueryParams = (req: Request) => {
  const identity = req.query.identity as string;
  const roomName = req.query.roomName as string;
  return { identity, roomName };
};
