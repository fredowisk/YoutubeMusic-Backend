import { Controller } from "@/presentation/protocols";
import { SongRepository } from "@/infra/database/song-repository/song-repository";
import { DbLoadSongById } from "@/data/usecases/song/load-song-by-id/db-load-song-by-id";
import { LoadSongByIdController } from "@/presentation/controllers/song/load-song-by-id/load-song-by-id-controller";
import { DbLoadSongInfo } from "@/data/usecases/song/load-song-info/db-load-song-info";

const makeLoadSongByIdController = (): Controller => {
  const loadSongRepository = new SongRepository();
  const loadSongById = new DbLoadSongById(loadSongRepository);
  const loadSongInfo = new DbLoadSongInfo(loadSongRepository);
  const loadSongByIdController = new LoadSongByIdController(loadSongById, loadSongInfo);
  return loadSongByIdController;
};

export { makeLoadSongByIdController };
