import {
  Controller,
  HttpRequest,
  HttpResponse,
  LoadSongs,
  noContent,
  ok,
} from "./load-songs-controller-protocols";

class LoadSongsController implements Controller {
  constructor(private readonly loadSongs: LoadSongs) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const songs = this.loadSongs.load();

    if (!songs) return noContent();

    return ok(songs);
  }
}

export { LoadSongsController };
