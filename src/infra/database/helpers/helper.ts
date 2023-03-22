import { join } from "node:path";
import { readFile, stat } from "node:fs/promises";

import { SongModel } from "@/domain/models/song/song";
import { SongInfoModel } from "@/domain/models/song/songInfo";

class DatabaseHelper {
  private static database: SongModel[];
  private static readonly databasePath: string = join(
    __dirname,
    "../../../../",
    "/database/",
    "database.json"
  );

  static async connect(): Promise<void> {
    DatabaseHelper.database = await JSON.parse(
      await readFile(DatabaseHelper.databasePath, { encoding: "utf-8" })
    );
  }

  static getDatabase(): SongModel[] {
    return DatabaseHelper.database;
  }

  static async getSongInfo(filename: string): Promise<SongInfoModel> {
    const songPath = join(
      __dirname,
      "../../../../",
      "database",
      "/videos/",
      `${filename}.mp4`
    );

    const songStat = await stat(songPath);
    const songSize = songStat.size;

    return { songPath, songSize };
  }
}

export { DatabaseHelper };
