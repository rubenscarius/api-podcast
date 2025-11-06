import http, { IncomingMessage, ServerResponse } from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controllers";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    // querystring
    const [baseUrl, queryString] = request.url?.split("?") || [];

    // List Episodes
    if (request.method === "GET" && baseUrl === "/api/list") {
      await getListEpisodes(request, response);
    }

    // Filter Episodes
    if (request.method === "GET" && baseUrl === "/api/episode") {
      await getFilterEpisodes(request, response);
    }
  }
);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
