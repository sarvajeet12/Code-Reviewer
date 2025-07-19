import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"


const app = express();
const port = process.env.PORT;

const corsOption = {
    // origin: "https://code-reviewer-client-b0dn.onrender.com",
    origin: "https://code-reviewer-beige.vercel.app/",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type'],
};


// middleware 
app.use(express.json());
app.use(cors(corsOption));


// Router
import getReviewRouter from "./routers/aiRouter.js"


// Route
app.use("/api/ai", getReviewRouter)


app.listen(port, () => {
    console.log(`Server run on port ${port}`);
})