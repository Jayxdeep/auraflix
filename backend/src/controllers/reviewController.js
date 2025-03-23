import mongoose from 'mongoose';
import Review from '../models/review.js';
import Influencer from '../models/Influencer.js';
import User from '../models/User.js'; 
import { updateScores } from '../utils/score.js';
import { detectFakeReview } from '../utils/fakeReview.js';

export const addReview = async (req, res) => {
  const { influencerId, credibilityRating, longevityRating, engagementRating, comment } = req.body;
  const clerkUserId = req.auth?.userId; 

  try {
    if (!clerkUserId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    console.log("Received review data:", { influencerId, credibilityRating, longevityRating, engagementRating, comment, clerkUserId });

    // ✅ Fetch User from MongoDB
    const user = await User.findOne({ clerkId: clerkUserId });

    if (!user) {
      return res.status(404).json({ message: "User not found in the database" });
    }

    const userObjectId = user._id; // ✅ Get MongoDB ObjectId

    // ✅ Fetch Influencer ID by name if needed
    let influencerObjectId;
    if (mongoose.Types.ObjectId.isValid(influencerId)) {
      influencerObjectId = new mongoose.Types.ObjectId(influencerId);
    } else {
      const influencer = await Influencer.findOne({ name: influencerId });
      if (!influencer) {
        return res.status(404).json({ message: "Influencer not found" });
      }
      influencerObjectId = influencer._id; // ✅ Get correct ObjectId
    }

    // ✅ Check for fake review
    const isFake = await detectFakeReview(userObjectId, credibilityRating, longevityRating, engagementRating, comment);

    const review = new Review({
      influencer: influencerObjectId,
      user: userObjectId,
      credibilityRating,
      longevityRating,
      engagementRating,
      comment,
      isFake,
    });

    console.log("Saving review:", review);
    await review.save();
    console.log("Review saved successfully!");

    const influencer = await Influencer.findById(influencerObjectId);
    if (!influencer) {
      return res.status(404).json({ message: "Influencer not found" });
    }

    const updatedInfluencer = updateScores(influencer, credibilityRating, longevityRating, engagementRating);
    await updatedInfluencer.save();

    res.status(201).json({ message: "Review successfully submitted and scores updated!" });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(400).json({ message: error.message });
  }
};
