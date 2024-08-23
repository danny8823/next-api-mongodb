import mongoose from "mongoose";
const URL = 'mongodb+srv://dannyyoo714:Jesuschrist8823!@nextjs-api.oj4rb.mongodb.net/?retryWrites=true&w=majority&appName=NEXTJS-API'

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(URL)
        console.log('DB connected')
    }catch(error){
        console.log('DB connecting error', error)
    }
}

export default connectDB