import { Request } from "express";

export const getRequestQueryParams = (
    req: Request
): { identity: string; roomName: string } => {
  const identity = req.query.identity as string;
  const roomName = req.query.roomName as string;
  return { identity, roomName };
};
