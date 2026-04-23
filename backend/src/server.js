import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import rateLimit from "./middleware/rateLimit.js"

dotenv.config()

const app = express()
const PORT = process.env.Port || 5001

app.use(express.json());
app.use(rateLimit)

app.use("/api/notes", notesRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
});