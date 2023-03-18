import express from "express";
import Game from "./models/Game.js";

const app = express();

app.use(express.json());

app
  .get("/", async (req, res) => {
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

app.get("/:id", async (req, res) => {
  const game = await Game.findById(req.params.id);
  res.json(game);
});

app.put("/:id", async (req, res) => {
  await Game.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((game) => {
    res.json(game);
  });
});

app.listen(3000, () => {
  console.log("Something, something, server running on the darkside");
});
