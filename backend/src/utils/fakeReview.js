import Review from "../models/review.js";

export const detectFakeReview = async (userId, credibilityRating, longevityRating, engagementRating, comment) => {
  //  Spam Words Detection
  const spamWords = ["free", "scam", "fake", "bot", "giveaway", "money", "discount"];
  const containsSpam = spamWords.some(word => comment.toLowerCase().includes(word));
  if (containsSpam) return true;

  // Extreme Rating Abuse 1 or 5 (Now takes into account all ratings)
  const userReviews = await Review.find({ user: userId });
  const extremeRatings = userReviews.filter(r => 
    r.credibilityRating === 1 || r.credibilityRating === 5 ||
    r.longevityRating === 1 || r.longevityRating === 5 ||
    r.engagementRating === 1 || r.engagementRating === 5
  );
  
  if (userReviews.length > 5 && extremeRatings.length / userReviews.length > 0.8) {
    return true;
  }

  // Duplicate Comment Detection
  const duplicateReview = userReviews.some(r => r.comment === comment);
  if (duplicateReview) return true;

  // Short Review Suspicion (Less than 5 words)
  if (comment.trim().split(/\s+/).length < 5) return true;

  return false;
};
