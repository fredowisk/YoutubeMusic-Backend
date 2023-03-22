import { Controller, HttpRequest, HttpResponse, serverError } from "./server-error-controller-protocols";

class ServerErrorController implements Controller {
  async handle (httpRequest: HttpRequest) : Promise<HttpResponse> {
    return serverError();
  }
}

export {ServerErrorController}