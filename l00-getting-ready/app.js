const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const contentBuffer = await fs.readFile(path.join(__dirname, "/text.txt"));
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(contentBuffer.toString("utf-8"));
});

server.listen(PORT, () => {
  console.log(`Server has started on ort ${PORT}`);
});
