import mongoose from "../db/connection.js";

const Game = new mongoose.Schema({
  // {
  //     name: String,
  //     release_date: String,
  //     dlc_count: Number,
  //     detailed_description: String,
  //     header_image: String,
  //     website: String,
  //     achievements: Number,
  //     supported_languages: Array,
  //     developers: Array,
  //     publishers: Array,
  //     categories: Array,
  //     genres: Array,
  //     screenshots: Array,
  //     movies: Array,
  //     average_playtime_forever: Number,
  //     peak_ccu: Number,
  //   },

  key: {
    name: String,
    release_date: String,
    required_age: Number,
    price: Number,
    dlc_count: Number,
    detailed_description: String,
    header_image: String,
    website: String,
    achievements: Number,
    supported_languages: [String],
    developers: [String],
    publishers: [String],
    categories: [String],
    genres: [String],
    screenshots: [String],
    movies: [String],
    average_playtime_forever: Number,
    peak_ccu: Number,
  },
});

export default mongoose.model("Game", Game);
