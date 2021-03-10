import { Express } from "express";
import exrpressLoader from "./express";
import Logger from "./logger";
// import postgresLoader from "./postgres";
import { Server } from "http";
// import queueLoader from "./queue";
/**
 * Asynchronous Loads up various jobs and services
 */

interface ServerTypes {
  expressApp: Express;
  httpServer: Server;
}
export default async ({ expressApp }: ServerTypes) => {
  /**
   * Express Loader
   */
  await exrpressLoader({ app: expressApp });
  Logger.info("✌️ Express loaded");

  /**
   * Postgress connection Loader
   */
  await postgresLoader();
  Logger.info("✌️ Postgres loaded");

  /**
   * Socket Loader
   */
  await socketLoader({ httpServer });
  Logger.info("✌️ Sockets loaded");

  /**
   * Worker Loader
   */
  await workerLoader();
  Logger.info("👷 workers ready‍️");
};
