import { SongModel } from "@/domain/models/song/song";

interface LoadSongById {
  loadById: (id: string) => SongModel;
}

export { LoadSongById };
