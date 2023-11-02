const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  color: {
    type: String
  }
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;