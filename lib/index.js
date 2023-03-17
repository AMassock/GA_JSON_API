import express from "express";
import Game from "./models/Game.js";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const game = await Game.find({});
  res.json(game);
});

app.listen(3000, () => {
  console.log("Something, something, server running on the darkside");
});
