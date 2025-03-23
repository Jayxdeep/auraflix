import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  influencer: { type: mongoose.Schema.Types.ObjectId, ref: 'Influencer', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref:"User",required: true }, 
  userName: { type: String },
  credibilityRating: { type: Number, required: true },
  longevityRating: { type: Number, required: true },
  engagementRating: { type: Number, required: true },
  comment: { type: String, required: true },
  isFake: { type: Boolean,  }
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;
