import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1000,
  },
  room: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  size: {
    type: String,
    enum: ["klein", "mittel", "gross"],
    required: true,
  },
  image: {
    type: {
      url: String,
      imageId: String,
    },
    required: true,
  },
});

export const Furniture = mongoose.model("Furniture", postsSchema);
