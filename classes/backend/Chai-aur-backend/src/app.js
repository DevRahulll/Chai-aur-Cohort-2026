import express from "express"
import cookieParser from "cookie-parser"
import authRoute from "./modules/auth/auth.routes.js"
import ApiError from "./common/utils/api-error.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/health", (_req, res) => {
    res.send("<h2>Aa gye aap Mera haal chal puchne</h2>");
})

//auth routes
app.use("/api/auth", authRoute);

//catch-all for undefined routes
app.all("{*path}", (req, res) => {
    throw ApiError.notfound(`Route ${req.originalUrl} not found`)
})

export default app;