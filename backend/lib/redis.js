const Redis = require('ioredis');
const { configDotenv } = require('dotenv');
configDotenv()

const redis = new Redis(process.env.UPSTASH_REDIS_URL);
async function initializeRedis() {
    await redis.set('foo', 'bar');
}
initializeRedis().catch((err) => {
    console.error("Error initializing Redis:", err);
});
module.exports = { redis }