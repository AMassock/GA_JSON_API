import express from "express";
import Game from "./models/Game.js";
import swaggerDocs from "./utils/swagger.js";

const port = 3000;
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  await res.redirect("/games");
});

app
  .route("/games")
  .get(async (req, res) => {
    if (req.query) {
      const game = await Game.find(req.query);
      res.json(game);
    } else {
      const game = await Game.find({});
      res.json(game);
    }
  })
  .post(async (req, res) => {
    const game = await Game.create(req.body);
    res.json(game);
  });

app
  .route("/games/:id")
  .get(async (req, res) => {
    const game = await Game.findById(req.params.id);
    res.json(game);
  })
  .put(async (req, res) => {
    await Game.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    }).then((game) => {
      res.json(game);
    });
  })
  .delete(async (req, res) => {
    await Game.findOneAndDelete({ _id: req.params.id }).then((game) => {
      res.json(game);
    });
  });

app.listen(port, () => {
  console.log("Something, something, server running on the darkside");
  swaggerDocs(app, port);
});
