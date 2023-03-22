import { SongInfoModel } from "@/domain/models/song/songInfo";
import {
  DatabaseHelper,
  LoadSongByIdRepository,
  LoadSongInfoRepository,
  LoadSongsRepository,
  SongModel,
} from "./song-repository-protocols";

class SongRepository
  implements
    LoadSongsRepository,
    LoadSongByIdRepository,
    LoadSongInfoRepository
{
  load(): SongModel[] {
    const songs = DatabaseHelper.getDatabase();
    return songs;
  }

  loadById(id: string): SongModel {
    const song = DatabaseHelper.getDatabase().find(
      ({ song_id }) => song_id === Number(id)
    );
    return song;
  }

  async loadInfo(filename: string): Promise<SongInfoModel> {
    const songInfo = await DatabaseHelper.getSongInfo(filename);

    return songInfo;
  }
}

export { SongRepository };
