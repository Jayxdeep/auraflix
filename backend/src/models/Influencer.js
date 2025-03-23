// In Influencer.js
import mongoose from 'mongoose';

const influencerSchema = mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    credibilityScore: {type: Number, default: 0},
    longevityScore: {type: Number, default: 0},
    engagementScore: {type: Number, default: 0},
    overallScore: {type: Number, default: 0},
}, {timestamps: true});

// Check if the model exists before creating it
export default mongoose.models.Influencer || mongoose.model('Influencer', influencerSchema);