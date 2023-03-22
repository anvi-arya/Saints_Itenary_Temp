const { default: mongoose, model } = require("mongoose");

const saintsItenarySchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: Date,
  deleted: Boolean,
  Experience_id: mongoose.Types.ObjectId,
  UserId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  postLink: String,
  Info: {
    loc: String,
    name: String,
    country: String,
    state: String,
    description: String,
    best_weather: String,
    time_to_visit: Date,
  },
  Images: [String],
  Videos: [String],
  Reviews: [
    {
      userid: mongoose.Types.ObjectId,
      comment: String,
      like_metrices: {
        location: String,
        visuals: String,
        tourist_friendly: Boolean,
        other: String,
      },
    },
  ],
  Hotel: { Homestay: {} },

  Sightseeing: {},

  TravelGuide: {},

  Cab: {},
});

const SaintsItenary = model(
  "SaintsItenary",
  saintsItenarySchema,
  "Saints_Itenary"
);
module.exports = {
  SaintsItenary,
};
