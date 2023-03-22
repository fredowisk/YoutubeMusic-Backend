import { IncomingMessage, ServerResponse } from "node:http";
import { parse } from "node:url";

import songRoutes from "./routes/song-routes";
import defaultRoutes from "./routes/default-routes";

const allRoutes = {
  ...songRoutes(),
  ...defaultRoutes(),
};

async function handler(request: IncomingMessage, response: ServerResponse) {
  const { url, method } = request;

  const { pathname } = parse(url, true);

  const key = `${pathname}:${method.toLowerCase()}`;
  const chosen = allRoutes[key] || allRoutes.default;
  const adaptedRoute = chosen();

  return Promise.resolve(adaptedRoute(request, response)).catch((error) => {
    const errorRoute = allRoutes.serverError();
    errorRoute(request, response);
  });
}

export { handler };
