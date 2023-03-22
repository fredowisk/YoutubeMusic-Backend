import { ServerErrorController } from "@/presentation/controllers/default/server-error/server-error-controller";
import { Controller } from "@/presentation/protocols";

const makeServerErrorController = (): Controller => {
  const serverErrorController = new ServerErrorController();

  return serverErrorController;
};

export { makeServerErrorController };
