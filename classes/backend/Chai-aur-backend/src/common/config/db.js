import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        // console.log("MOGODB CONN: ", conn);
        console.log(`DB connected successfully: ${conn.connection.host}`)
    } catch (error) {
        console.log("Error in connecting DB! Kindly check connection...", error``)
    }
}

export default connectToDB;