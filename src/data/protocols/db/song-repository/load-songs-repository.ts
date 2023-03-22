import { SongModel } from "@/domain/models/song/song";

interface LoadSongsRepository {
  load: () => SongModel[];
}

export { LoadSongsRepository };
