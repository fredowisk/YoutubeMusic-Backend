import { adaptRoute } from "../adapters/route-adapter";
import { adaptRouteStream } from "../adapters/route-stream-adapter";
import { makeLoadSongByIdController } from "../factories/song/load-song-by-id/load-song-by-id-factory";
import { makeLoadSongsController } from "../factories/song/load-songs/load-songs-factory";

export default () => ({
  "/songs:get": () => adaptRoute(makeLoadSongsController()),
  "/song:get": () => adaptRouteStream(makeLoadSongByIdController()),
});

