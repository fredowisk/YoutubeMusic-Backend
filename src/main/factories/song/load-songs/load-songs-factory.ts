import { Controller } from "@/presentation/protocols";
import { SongRepository } from "@/infra/database/song-repository/song-repository";
import { DbLoadSongs } from "@/data/usecases/song/load-songs/db-load-songs";
import { LoadSongsController } from "@/presentation/controllers/song/load-songs/load-songs-controller";

const makeLoadSongsController = (): Controller => {
  const loadSongRepository = new SongRepository();
  const loadSongs = new DbLoadSongs(loadSongRepository);
  const loadSongsController = new LoadSongsController(loadSongs);

  return loadSongsController;
};

export { makeLoadSongsController };
