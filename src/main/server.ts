import "module-alias/register";
import { createServer, IncomingMessage, ServerResponse } from "node:http";

import { DatabaseHelper } from "@/infra/database/helpers/helper";
import { DEFAULT_PORT } from "./config/constants";
import { handler } from "./handler";
import { cors } from "./middlewares/cors";

DatabaseHelper.connect()
  .then(async () => {
    createServer(async (request: IncomingMessage, response: ServerResponse) => {
      cors(request, response);
      await handler(request, response);
    }).listen(DEFAULT_PORT, () => console.log("server running!"));
  })
  .catch(console.error);

process.on("uncaughtException", (error: Error) =>
  console.error(`unhandledRejection happened: ${error.stack || error}`)
);

process.on("unhandledRejection", (error: Error) =>
  console.error(`unhandledRejection happened: ${error.stack || error}`)
);
