const express = require("express");
const path = require("path");
const buildDir = path.join(__dirname, "..", "..", "frontend");
const app = express();

(async () => {
  const mode = process.env.npm_lifecycle_event;

  switch (mode) {
    case "start": {
      // Modo de produção.
      try {
        const { handler } = await import("../../frontend/dist/server/entry.mjs");

        app.use(express.static(path.join(buildDir, "dist", "client")));
        app.use(handler);

        console.log("> [SERVER - ASTRO] Modo de produção. Frontend configurado.");
      } catch (err) {
        console.log(err)
        console.log("> [SERVER - ASTRO] Modo de produção. Nenhum frontend foi encontrado ou ocorreu um erro.");
      };
      break;
    }
    case "dev": {
      // Modo de desenvolvimento.
      console.log(
        "> [SERVER - ASTRO] Modo de desenvolvimento. Não haverá nenhum frontend do astrojs."
      );
      break;
    }
  }
})();

const api = require("./api");
app.use("/api", api);

module.exports = app;
