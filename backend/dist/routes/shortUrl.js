"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const urlController_1 = require("../controllers/urlController");
router.post("/shortUrl", urlController_1.createShortUrl);
router.get("/getAllUrl", urlController_1.getAllUrls);
router.get("/getShortUrl/:id", urlController_1.getShortUrl);
router.delete("/deleteUrl/:id", urlController_1.deleteUrl);
exports.default = router;
