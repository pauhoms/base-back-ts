import { Application, Request, Response } from "express";

import { baseUrl } from "../configuration";

export const loadApiEndpoints = (app: Application): void => {
  app.get(baseUrl, (req: Request, res: Response) => {
    return res.status(200).send({});
  });
};
