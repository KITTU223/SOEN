import Redis from "ioredis";

const redidClient = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
});

redidClient.on('connect', ()=>{
    console.log('Redis Connected');
    
})

export default redidClient;