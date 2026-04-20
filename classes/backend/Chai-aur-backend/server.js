import "dotenv/config"
import connectToDB from "./src/common/config/db.js"
import app from "./src/app.js"

const PORT = process.env.PORT || 5000

const server = async () => {

    await connectToDB();

    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT} in ${process.env.NODE_ENV} mode`)
    })
}

server().catch((err) => {
    console.error("Failed to start server", err);
    process.exit(1);
})