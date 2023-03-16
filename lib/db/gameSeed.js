import getData from "../data/fetch.js";
import Game from "../models/Game.js";
import data from "../data/games.json" assert { type: "json" };

await getData();

async function seed() {
  await Game.deleteMany({});

  await Game.create(data);

  console.log("<------------------------->");
  console.log("seeding complete");
  console.log("<------------------------->");

  process.exit();
}

seed();
