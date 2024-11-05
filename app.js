const express = require("express");
const router = require("./src/routes/api");
const app = new express();

// Security middleware import
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const cookieParser = require('cookie-parser');






// Environment variable import and implement
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// Security middleware implement
app.use(cors());
//app.use(helmet());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());
app.use(cookieParser());




// Allow img from other src
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "https://thereadersea.com/", "https://usabilitydesigns.com/","https://talent-outsourcing.com/", "data:"],
      },
    },
  }),
);



// Req rate limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 30000 });
app.use(limiter);

// json body parse
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Database connection
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/MernPortfolio";
const option = { user: "", pass: "", autoIndex: true };

//const url="mongodb+srv://Repon:<password>@cluster0.nhslprh.mongodb.net/MernPortfolio";
//const option={user:"Repon", pass:"Repon7248", autoIndex:true};

mongoose
  .connect(url, option)
  .then((res) => {
    console.log("Database connected successful ... ");
  })
  .catch((error) => {
    console.log(error);
  });




// File uploading process
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        return cb(null, '/uploads');
    },
    filename: (req, file, cb)=> {
        return cb(null, Date.now() +"-"+ path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
// Route to handle single file upload
app.post('/api/upload', upload.single('image'), (req, res) => {
    if(req.file){
        res.json({status:"success", data: req.file , message: 'Single file uploaded successfully!' });
    }else {
        res.json({status:"failed" , message: 'Single file uploaded failed!' });
    }
});











// Api router manage
app.use("/api", router);

app.set("etag", false);

// connect front end
app.use(express.static("client/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

// 404 url not found manage
//app.use("*", (req, res) => {
//  res.status(404).json({ data: "Not found" });
//});

module.exports = app;
