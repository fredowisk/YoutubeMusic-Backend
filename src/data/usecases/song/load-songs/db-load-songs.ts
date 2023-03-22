import {
  LoadSongs,
  LoadSongsRepository,
  SongModel,
} from "./db-load-songs-protocols";

class DbLoadSongs implements LoadSongs {
  constructor(private readonly loadSongsRepository: LoadSongsRepository) {}

  load(): SongModel[] {
    const songs = this.loadSongsRepository.load();

    return songs;
  }
}

export { DbLoadSongs };

