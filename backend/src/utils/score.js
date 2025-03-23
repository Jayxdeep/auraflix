// In score.js - correct path based on your file structure
// import Influencer from "../models/influencer.js";

export const updateScores = (influencer, credibilityRating, longevityRating, engagementRating) => {
    // Compare and update scores
    if (credibilityRating > influencer.credibilityScore) {
        influencer.credibilityScore = credibilityRating;
    }
    if (longevityRating > influencer.longevityScore) {
        influencer.longevityScore = longevityRating;
    }
    if (engagementRating > influencer.engagementScore) {
        influencer.engagementScore = engagementRating;
    }

    // Calculate overall score
    influencer.overallScore = (influencer.credibilityScore + influencer.longevityScore + influencer.engagementScore) / 3;

    // Ensure scores do not exceed 5
    influencer.credibilityScore = Math.min(influencer.credibilityScore, 5);
    influencer.longevityScore = Math.min(influencer.longevityScore, 5);
    influencer.engagementScore = Math.min(influencer.engagementScore, 5);
    influencer.overallScore = Math.min(influencer.overallScore, 5);

    return influencer;
};