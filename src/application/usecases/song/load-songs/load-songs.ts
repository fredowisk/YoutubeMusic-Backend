import { SongModel } from "@/domain/models/song/song";

interface LoadSongs {
  load: () => SongModel[];
}

export { LoadSongs };
