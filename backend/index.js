const http = require("http");
const path = require("path");
const { PORT } = require(path.join(__dirname, "..", "config", "server.json"));
const app = require(path.join(__dirname, "routes", "_app.js"));

(async () => {
    const server = http.createServer(app);

    server.listen(PORT, () => {
        console.log(`> [SERVER] Ouvindo em http://localhost:${PORT}`);
    });
})();