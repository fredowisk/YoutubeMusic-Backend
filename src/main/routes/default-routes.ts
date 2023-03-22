import { adaptRoute } from "../adapters/route-adapter";
import { makeNotFoundController } from "../factories/default/not-found/not-found-factory";
import { makeServerErrorController } from "../factories/default/server-error/server-error-factory";

export default () => ({
  default: () => adaptRoute(makeNotFoundController()),
  serverError: () => adaptRoute(makeServerErrorController()),
});
