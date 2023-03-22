import { createReadStream } from "node:fs";
import {
  Controller,
  HttpRequest,
  HttpResponse,
  LoadSongById,
  LoadSongInfo,
  notFound,
  partial,
  rangeNotSatisfiable,
} from "./load-song-by-id-controller-protocols";

class LoadSongByIdController implements Controller {
  constructor(
    private readonly loadSongById: LoadSongById,
    private readonly loadSongInfo: LoadSongInfo
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const id = httpRequest.params.watch;
    const song = this.loadSongById.loadById(id);

    if (!song) return notFound();

    const parts = httpRequest.headers.range.replace(/bytes=/, "").split("-");

    const { songPath, songSize } = await this.loadSongInfo.loadInfo(song.title);

    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : songSize - 1;

    const chunksize = end - start + 1;

    if (start >= songSize) return rangeNotSatisfiable();

    const stream = createReadStream(songPath, { start, end });

    return partial(start, end, songSize, chunksize, stream);
  }
}

export { LoadSongByIdController };
