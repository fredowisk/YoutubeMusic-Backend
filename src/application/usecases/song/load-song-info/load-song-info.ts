import { SongInfoModel } from "@/domain/models/song/songInfo";

interface LoadSongInfo {
  loadInfo: (filename: string) => Promise<SongInfoModel>
}

export {LoadSongInfo}