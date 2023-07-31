import express from "express";
const app = express();
import authRoutes from "./routes1/auth.js";
import userRoutes from "./routes1/users.js";
import postRoutes from "./routes1/posts.js";
import commentRoutes from "./routes1/comments.js";
import likeRoutes from "./routes1/likes.js";
import relationshipRoutes from "./routes1/relationships.js";
// import transRoutes from "./routes1/trans.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    // adding the date time to name to make it unique n avoid duplicacy
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipRoutes);
// app.use("/api/trans", transRoutes);

app.listen(8800, () => {
  console.log("API working!");
});
