// Paas:14x8d1LMK2DbtKIo
// username:hammadkhanmailbox
import mongoose from "mongoose";

const connectionDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connected");
  } catch (error) {
    console.log("MongoDb Connection failed", error);
    process.exit(1);
  }
};

export default connectionDb;
