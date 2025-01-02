import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in your .env file");
}

// Global variable to track connection state across multiple calls
let isConnected = false;

const dbConnect = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  if (mongoose.connection.readyState > 0) {
    isConnected = mongoose.connection.readyState === 1;
    return;
  }

  try {
    const connection = await mongoose.connect(MONGO_URI);
    isConnected = connection.connections[0].readyState === 1; // Connection state: 1 = connected
    console.log("MongoDB connection successful.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Failed to connect to MongoDB.");
  }
};

export default dbConnect;
