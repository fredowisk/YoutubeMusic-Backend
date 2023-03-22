import { IncomingMessage, ServerResponse } from "http";

export const cors = (
  request: IncomingMessage,
  response: ServerResponse
): void => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
};
