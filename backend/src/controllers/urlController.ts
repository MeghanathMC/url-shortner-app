import express, { Request, Response } from "express";

import { shortUrlModel } from "../model/shortUrlModel";

export const createShortUrl = async (req: Request, res: Response) => {
  try {
    const { fullUrl } = req.body;
    console.log("The full url is", req.body.fullUrl);
    const urlFound = await shortUrlModel.findOne({ fullUrl });

    if (urlFound) {
      return res.status(409).json(urlFound);
    } else {
      const shortUrl = await shortUrlModel.create({ fullUrl });
      return res.status(201).json(shortUrl);
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

export const getAllUrls = async (req: Request, res: Response) => {
  try {
    const allShortUrls = await shortUrlModel.find().sort({
      createdAt: -1
    });
    return res.status(200).json(allShortUrls);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch all URLs!" });
  }
};

export const getShortUrl = async (req: Request, res: Response) => {

    const shortUrl = req.params.id;
  try {
    const shortUrlFound = await shortUrlModel.findOne({shortUrl });

    // console.log(shortUrlFound);
    if (!shortUrlFound) {
      return res.status(404).json({
        message: " URL Not found",
      });
    } else {
      shortUrlFound.clicks++;
      shortUrlFound.save();
      //after clicking , we have to redirect to the full url
      res.redirect(`${shortUrlFound.fullUrl}`);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

export const deleteUrl = async (req: Request, res: Response) => {
    try{
       const urlToBeDeleted =  await shortUrlModel.findByIdAndDelete(req.params.id);
       if(urlToBeDeleted){
     return res.sendStatus(204);
       }
       else{
        return res.status(404).json({
            message:"URL not found"
        })
       }
    }
    catch(error){
       return res.status(500).json({
            message:"Something went wrong!"
        })
    }

};
