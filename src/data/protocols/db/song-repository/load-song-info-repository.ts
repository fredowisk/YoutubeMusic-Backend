import { SongInfoModel } from "@/domain/models/song/songInfo";

interface LoadSongInfoRepository {
  loadInfo: (filename: string) => Promise<SongInfoModel>;
}

export { LoadSongInfoRepository };
