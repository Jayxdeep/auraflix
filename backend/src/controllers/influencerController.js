import Influencer from "../models/influencer.js";
import { format } from 'date-fns';  // Import format function from date-fns

export const getInfluencers = async (req, res) => {
  try {
    const influencers = await Influencer.find();
    const formattedInfluencers = influencers.map((influencer) => {
      return {
        ...influencer._doc, // Get all the document fields
        createdAt: format(new Date(influencer.createdAt), 'yyyy-MM-dd HH:mm:ss'), // Format createdAt
        updatedAt: format(new Date(influencer.updatedAt), 'yyyy-MM-dd HH:mm:ss'), // Format updatedAt
      };
    });
    res.json(formattedInfluencers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addInfluencer = async (req, res) => {
  try {
    const { name, category } = req.body;
    const newInfluencer = new Influencer({ name, category });
    await newInfluencer.save();
    res.status(201).json(newInfluencer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
