import mongoose from "mongoose";
import imageModel from "../models/imageModel";
import path from "path";
import asyncHandler from "express-async-handler";

const uploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error("Please upload the valid formate images");
  }

  const newImage = await imageModel.create({
    filelocation: req.file.filename,
  });

  if (newImage) {
    res.status(200).json({
      message: "Image Upload successfully",
      ImageID: newImage.id,
    });
  } else {
    res.status(400);
    throw new Error(
      "Failing to upload the image, the format of image not correct",
    );
  }
});

const getImage = asyncHandler(async (req, res) => {
  const ImageID = req.params.ImageID;
  let isValidID = mongoose.Types.ObjectId.isValid(ImageID);
  let reqImg = isValidID && (await imageModel.findById(ImageID));

  if (!reqImg) {
    throw new Error("Does not exist in database , you make request the image ");
  }

  let imgpath = path.resolve(
    __dirname,
    "../upload/images/",
    reqImg.fileLocation,
  );
  res.status(200).sendFile(imgpath);
});

export default { getImage, uploadImage };
