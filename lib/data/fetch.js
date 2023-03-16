import fetch from "node-fetch";
import fs from "fs";

const url =
  "https://api.rawg.io/api/games?key=6edc543964d14be7bdbd12f38a8a2677";

async function getData() {
  try {
    const res = await fetch(url);
    const json = await res.json();
    fs.writeFileSync("./games.json", JSON.stringify(json));
    console.log("file written..");
  } catch (err) {
    console.log(err);
  }
}

export default getData;
