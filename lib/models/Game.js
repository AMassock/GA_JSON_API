import mongoose from "../db/connection.js";

const Game = new mongoose.Schema({
  id: Number,
  name: String,
  released: String,
  background_image: String,
  ratings: [{ id: Number, title: String, count: Number, percent: Number }],
  playtime: Number,
  platforms: [
    {
      platform: {
        name: String,
        image_background: String,
      },
      released_at: String,
    },
  ],
  genres: [
    {
      id: Number,
      name: String,
    },
  ],
  esrb_rating: { id: Number, name: String },
  short_screenshots: [
    {
      id: Number,
      image: String,
    },
  ],
});

export default mongoose.model("Game", Game);
