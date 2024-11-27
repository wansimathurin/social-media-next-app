import mongoose from "mongoose";

mongoose.set('strictQuery', false);
const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/socialMedia');
    } catch (error) {
        throw new Error('Could not connect to MongoDb: ' + error);
    }
}

export default connectDB;