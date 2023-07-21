import { v2 as cloudinary } from "cloudinary";
import "../config/config.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const uploadToCloudinary = (fileBuffer, callback) => {
  cloudinary.uploader
    .upload_stream({ resource_type: "image", folder: "MyFurniture" }, callback)
    .end(fileBuffer);
};

export const deleteFromCloudinary = (imageId) => {
  cloudinary.uploader.destroy(imageId, (err) => {
    if (err) {
      console.log("Cloudinary delete error:", err);
    } else {
      console.log("Cloudinary delete success");
    }
  });
};
