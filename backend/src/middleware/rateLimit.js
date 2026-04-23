import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("My-Rate-Limit")
        if (!success) {
            return res.status(429).json({ message: "Too Many Requests" })
        }
        next()
    } catch (error) {
        console.error("Error in rate limiter:", error)
        next(error)
    }
}

export default rateLimiter