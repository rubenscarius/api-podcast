import http, { IncomingMessage, ServerResponse } from "http";
import { getListEpisodes } from "./controllers/podcasts-controllers";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    if (request.method === "GET") {
      await getListEpisodes(request, response);
    }
  }
);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
