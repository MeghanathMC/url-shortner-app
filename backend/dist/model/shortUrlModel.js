"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortUrlModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//nanoid is to generate short url id's it is like a unique UUID.
const nanoid_1 = require("nanoid");
const shortUrlSchema = new mongoose_1.default.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: () => (0, nanoid_1.nanoid)().substring(0, 10)
    },
    clicks: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
});
exports.shortUrlModel = mongoose_1.default.model("shorturl", shortUrlSchema);
