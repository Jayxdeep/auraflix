import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true }, 
  name: {type:String,required:true},
  email: { type: String, required: true },
});

export default mongoose.model('User', userSchema);
