import {
  LoadSongInfo,
  LoadSongInfoRepository,
  SongInfoModel,
} from "./db-load-song-info-protocols";

class DbLoadSongInfo implements LoadSongInfo {
  constructor(
    private readonly loadSongInfoRepository: LoadSongInfoRepository
  ) {}

  async loadInfo(filename: string): Promise<SongInfoModel> {
    const songInfo = await this.loadSongInfoRepository.loadInfo(filename);

    return songInfo;
  }
}

export { DbLoadSongInfo };
