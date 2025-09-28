import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig";
import cors from "cors";
import shortUrl from "./routes/shortUrl";

const app = express();
dotenv.config(); //to fetch values from .env file
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(
  {
        origin: [
          "http://localhost:5173",
        "https://url-shortner-app-pearl.vercel.app/",
        ],
        credentials:true
    }
));
connectDB();



app.use("/api",shortUrl);

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`app is running over ${PORT}`);
});
