"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUrl = exports.getShortUrl = exports.getAllUrls = exports.createShortUrl = void 0;
const shortUrlModel_1 = require("../model/shortUrlModel");
const createShortUrl = async (req, res) => {
    try {
        const { fullUrl } = req.body;
        console.log("The full url is", req.body.fullUrl);
        const urlFound = await shortUrlModel_1.shortUrlModel.findOne({ fullUrl });
        if (urlFound) {
            return res.status(409).json(urlFound);
        }
        else {
            const shortUrl = await shortUrlModel_1.shortUrlModel.create({ fullUrl });
            return res.status(201).json(shortUrl);
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong!",
        });
    }
};
exports.createShortUrl = createShortUrl;
const getAllUrls = async (req, res) => {
    try {
        const allShortUrls = await shortUrlModel_1.shortUrlModel.find().sort({
            createdAt: -1
        });
        return res.status(200).json(allShortUrls);
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to fetch all URLs!" });
    }
};
exports.getAllUrls = getAllUrls;
const getShortUrl = async (req, res) => {
    const shortUrl = req.params.id;
    try {
        const shortUrlFound = await shortUrlModel_1.shortUrlModel.findOne({ shortUrl });
        // console.log(shortUrlFound);
        if (!shortUrlFound) {
            return res.status(404).json({
                message: " URL Not found",
            });
        }
        else {
            shortUrlFound.clicks++;
            shortUrlFound.save();
            //after clicking , we have to redirect to the full url
            res.redirect(`${shortUrlFound.fullUrl}`);
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong!",
        });
    }
};
exports.getShortUrl = getShortUrl;
const deleteUrl = async (req, res) => {
    try {
        const urlToBeDeleted = await shortUrlModel_1.shortUrlModel.findByIdAndDelete(req.params.id);
        if (urlToBeDeleted) {
            return res.sendStatus(204);
        }
        else {
            return res.status(404).json({
                message: "URL not found"
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong!"
        });
    }
};
exports.deleteUrl = deleteUrl;
