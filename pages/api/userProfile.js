import UserProfile from '../../models/UserProfile';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { userId, profilePicture, address } = req.body;
    const userProfile = new UserProfile({ user: userId, profilePicture, address });
    await userProfile.save();
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, error: 'This method is not allowed' });
  }
};

export default connectDb(handler);
