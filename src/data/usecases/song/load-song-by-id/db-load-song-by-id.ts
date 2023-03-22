import {
  LoadSongById,
  LoadSongByIdRepository,
  SongModel,
} from "./db-load-song-by-id-protocols";

class DbLoadSongById implements LoadSongById {
  constructor(
    private readonly loadSongByIdRepository: LoadSongByIdRepository
  ) {}

  loadById(id: string): SongModel {
    const song = this.loadSongByIdRepository.loadById(id);

    return song;
  }
}

export { DbLoadSongById };
