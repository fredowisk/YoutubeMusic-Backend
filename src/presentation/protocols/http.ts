interface HttpResponse {
  statusCode: number;
  headerContent?: {"Content-Type": string};
  body: any;
}

interface HttpRequest {
  params?: any;
  body?: any;
  headers?: any;
}

export { HttpResponse, HttpRequest };
