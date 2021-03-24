import cors from "cors";
import { json, Request, Response, urlencoded } from "express";
import routes from "../api";
import config from "../config";
import errorHandler from "../utils/errorHandler";
import { ExpressApp } from "@types";

export default ({ app }: ExpressApp) => {
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.enable("trust proxy");
  app.use(cors());

  app.get("/", (/*_: Request, _: Response*/) => {
    /**
     * TODO: write get reponsse
     */
  });

  /**
   * Status Health check
   * Method get
   * returns 200 status code
   */
  app.get("/status", (_, res: Response) => {
    res.status(200).end();
  });

  /**
   * Load up routers
   */
  app.use(config.api.prefix, routes());

  /**
   * Error handling
   * returns the error's status code or general 500
   */
  app.use(errorHandler);
};
