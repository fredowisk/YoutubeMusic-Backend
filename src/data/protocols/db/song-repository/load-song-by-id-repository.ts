import { SongModel } from "@/domain/models/song/song";

interface LoadSongByIdRepository {
  loadById: (id: string) => SongModel;
}

export { LoadSongByIdRepository };
