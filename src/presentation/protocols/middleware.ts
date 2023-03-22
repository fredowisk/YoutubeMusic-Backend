import { HttpRequest, HttpResponse } from "./http";

interface Middleware {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>;
}

export { Middleware };
