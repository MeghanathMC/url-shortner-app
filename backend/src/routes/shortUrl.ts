import express from "express";
const router = express.Router();
import { createShortUrl,getAllUrls,getShortUrl,deleteUrl } from "../controllers/urlController";
 
router.post("/shortUrl",createShortUrl);
router.get("/getAllUrl", getAllUrls);
router.get("/getShortUrl/:id",getShortUrl);
router.delete("/deleteUrl/:id",deleteUrl);


export default router;