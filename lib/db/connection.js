import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/games", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;
