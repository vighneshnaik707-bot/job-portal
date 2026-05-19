// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
// import companyRoute from "./routes/company.route.js";
// import jobRoute from "./routes/job.route.js";
// import applicationRoute from "./routes/application.route.js";

// dotenv.config({});

// const app = express();

// // middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());
// const corsOptions = {
//     origin:'http://localhost:5173',
//     credentials:true
// }

// app.use(cors(corsOptions));

// const PORT = process.env.PORT || 3000;


// // api's
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);



// app.listen(PORT,()=>{
//     connectDB();
//     console.log(`Server running at port ${PORT}`);
// })

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./utils/db.js";

import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

// ======================
// Middleware
// ======================

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(cookieParser());

// ======================
// CORS Configuration
// ======================

const corsOptions = {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
};

app.use(cors(corsOptions));

// ======================
// Port
// ======================

const PORT = process.env.PORT || 8000;

// ======================
// Root Route
// ======================

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Job Portal Backend Running Successfully"
    });
});

// ======================
// API Routes
// ======================

app.use("/api/v1/user", userRoute);

app.use("/api/v1/company", companyRoute);

app.use("/api/v1/job", jobRoute);

app.use("/api/v1/application", applicationRoute);

// ======================
// Database Connection
// ======================

connectDB();

// ======================
// Server Start
// ======================

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});