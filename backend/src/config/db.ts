import mongoose from "mongoose";


const connectDB = async (retries = 5 , delay=5000)=>{
    try {
        if(!process.env.MONGO_URI){
            console.warn("⚠️ WARNING: MONGO_URI not set in environment variables!");
            console.warn("⚠️ Backend will run without database connection.");
            console.warn("⚠️ Please set MONGO_URI in Render dashboard for full functionality.");
            return; // Don't crash, just return
        }
        await mongoose.connect(process.env.MONGO_URI)
        console.log('✅ MongoDB connected to', process.env.MONGO_URI.replace(/\/\/.*:.*@/, '//***:***@')) // Hide credentials in logs
    } catch (e : any) {
        console.error('❌ MongoDB connection error:', e.message)
        if(retries=== 0 ){
            console.error('❌ Failed to connect to MongoDB after all retries');
            console.warn('⚠️ Backend will continue WITHOUT database connection');
            return; // Don't exit, just continue without DB
        }else{
            console.log(`🔄 Retrying to connect in ${delay/1000} seconds... (${retries} retries left)`)
            setTimeout(()=>connectDB(retries-1, delay), delay)
        }
    }
}

export default connectDB