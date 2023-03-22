import { IncomingMessage, ServerResponse } from "node:http";
import { parse } from "node:url";

import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "@/presentation/protocols";

export const adaptRouteStream = (controller: Controller) => {
  return async (request: IncomingMessage, response: ServerResponse) => {
    const {
      url,
      headers: { range = "bytes=0-" },
    } = request;

    const { query } = parse(url, true);

    const httpRequest: HttpRequest = {
      params: query,
      headers: { range },
    };

    const { statusCode, headerContent, body }: HttpResponse =
      await controller.handle(httpRequest);

    response.writeHead(statusCode, headerContent);

    body.pipe(response);

    request.once("close", () => {
      return response.end();
    });
  };
};
