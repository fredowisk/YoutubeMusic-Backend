import { Controller, HttpRequest, HttpResponse, notFound } from "./not-found-controller-protocols";

class NotFoundController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return notFound();
  }
}

export {NotFoundController}