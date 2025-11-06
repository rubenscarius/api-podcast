export enum ContentType {
  // JSON / Data
  JSON = "application/json",
  FORM = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",
  XML = "application/xml",
  TEXT_XML = "text/xml",
  CSV = "text/csv",
  YAML = "application/x-yaml",

  // Text / Documents
  TEXT = "text/plain",
  HTML = "text/html",
  MARKDOWN = "text/markdown",
  JAVASCRIPT = "application/javascript",
  TYPESCRIPT = "application/typescript",
  CSS = "text/css",
  RTF = "application/rtf",
  PDF = "application/pdf",

  // Images
  JPEG = "image/jpeg",
  PNG = "image/png",
  GIF = "image/gif",
  WEBP = "image/webp",
  SVG = "image/svg+xml",
  ICON = "image/x-icon",
  BMP = "image/bmp",
  TIFF = "image/tiff",
  AVIF = "image/avif",

  // Audio
  MP3 = "audio/mpeg",
  OGG_AUDIO = "audio/ogg",
  WAV = "audio/wav",
  AAC = "audio/aac",
  FLAC = "audio/flac",
  WEBM_AUDIO = "audio/webm",

  // Video
  MP4 = "video/mp4",
  MPEG = "video/mpeg",
  WEBM = "video/webm",
  OGG_VIDEO = "video/ogg",
  AVI = "video/x-msvideo",
  MOV = "video/quicktime",

  // Archives / Binary
  OCTET_STREAM = "application/octet-stream",
  ZIP = "application/zip",
  GZIP = "application/gzip",
  TAR = "application/x-tar",
  SEVEN_ZIP = "application/x-7z-compressed",

  // Fonts
  WOFF = "font/woff",
  WOFF2 = "font/woff2",
  TTF = "font/ttf",
  OTF = "font/otf",

  // Others
  JSONLD = "application/ld+json",
  MANIFEST_JSON = "application/manifest+json",
  EVENT_STREAM = "text/event-stream",
}
