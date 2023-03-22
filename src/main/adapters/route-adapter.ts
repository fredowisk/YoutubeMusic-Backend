import { IncomingMessage, ServerResponse } from "node:http";

import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "@/presentation/protocols";

export const adaptRoute = (controller: Controller) => {
  return async (request: IncomingMessage, response: ServerResponse) => {
    const httpRequest: HttpRequest = {};

    const { statusCode, headerContent, body }: HttpResponse =
      await controller.handle(httpRequest);

    response.writeHead(statusCode, headerContent);
    response.write(JSON.stringify(body));
    return response.end();
  };
};
