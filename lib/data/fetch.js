import fs from "fs";

const url =
  "https://api.rawg.io/api/games?key=6edc543964d14be7bdbd12f38a8a2677";
const path = "./games_2.json";

const downloadFile = async (url, path) => {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on("error", reject);
    fileStream.on("finish", resolve);
  });
};

downloadFile();
