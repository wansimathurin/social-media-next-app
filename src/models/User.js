import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User',userSchema);


// {
//   "_id": {
//     "$oid": "67321ba4961f7038d8f05194"
//   },
//   "username": "john_doe",
//   "email": "john@example.com",
//   "password": "hashedpassword123",
//   "profile_picture": "images/profile1.jpg",
//   "bio": "I love hiking and photography!",
//   "followers_count": 120,
//   "following_count": 80,
//   "followers": [],
//   "following": [],
//   "created_at": {
//     "$date": "2024-11-11T14:58:44.933Z"
//   }
// }