import { ReadStream } from "node:fs";

import { HttpResponse } from "@/presentation/protocols";
import {
  OK_HEADER_CODE,
  NO_CONTENT_HEADER_CODE,
  PARTIAL_HEADER_CODE,
  RANGE_NOT_SATISFIABLE_CODE,
  ERROR_HEADER_CODE,
  NOT_FOUND_HEADER_CODE,
  DEFAULT_HEADER_CONTENT,
} from "@/main/config/constants";

const partial = (
  start: number,
  end: number,
  songSize: number,
  chunksize: number,
  stream: ReadStream
): HttpResponse => {
  const head = {
    "Content-Range": `bytes ${start}-${end}/${songSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": chunksize,
    "Content-Type": "video/mp4",
  };

  return {
    statusCode: PARTIAL_HEADER_CODE,
    headerContent: head,
    body: stream,
  };
};

const ok = (data: any): HttpResponse => {
  return {
    statusCode: OK_HEADER_CODE,
    headerContent: DEFAULT_HEADER_CONTENT,
    body: data,
  };
};

const noContent = (): HttpResponse => {
  return {
    statusCode: NO_CONTENT_HEADER_CODE,
    headerContent: DEFAULT_HEADER_CONTENT,
    body: null,
  };
};

const rangeNotSatisfiable = (): HttpResponse => {
  return {
    statusCode: RANGE_NOT_SATISFIABLE_CODE,
    body: null,
  };
};

const serverError = (): HttpResponse => {
  return {
    statusCode: ERROR_HEADER_CODE,
    headerContent: DEFAULT_HEADER_CONTENT,
    body: { error: "internal server error!" },
  };
};

const notFound = (): HttpResponse => {
  return {
    statusCode: NOT_FOUND_HEADER_CODE,
    headerContent: DEFAULT_HEADER_CONTENT,
    body: "Not found!",
  };
};

export { partial, ok, noContent, rangeNotSatisfiable, serverError, notFound };
