import { NotFoundController } from "@/presentation/controllers/default/not-found/not-found-controller";
import { Controller } from "@/presentation/protocols";

const makeNotFoundController = (): Controller => {
  const notFoundController = new NotFoundController();

  return notFoundController;
};

export { makeNotFoundController };
