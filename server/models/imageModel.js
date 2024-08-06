import mongoose from "mongoose";

const imageScheme = new mongoose.Schema({
  fileLocation: {
    type: String,
    required: true,
    unique: true,
  },
});

let imageModel = mongoose.model("Image", imageScheme);

export default imageModel;
