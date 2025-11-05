# Podcast Manager

## Descrição

App ao estilo Netflix, que possa centrlizar diferentes episódios de podcasts separados por categorias

## Features

- GET: Listar os episódios de podcasts em sessões de categorias
  - [saúde, humor, fitness, mentalidade]
- GET: Filtrar os episódios por nome de podcasts

## Como implementar

Retornar API REST (json) o nome, episódio, thumb, link

```js
[
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    cover:
      "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "humor"],
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    cover:
      "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDgyHAUb9vIwNYXr8G6ZPXKWyU__A",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"],
  },
];
```
