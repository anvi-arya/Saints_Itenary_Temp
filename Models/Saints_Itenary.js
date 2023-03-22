const { default: mongoose, model } = require("mongoose");

const saintsItenarySchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: Date,
  deleted: {
    type: Boolean,
    default: false,
  },
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

// this SaintsItenary is a model class which can be used to find documents in this collection
// It can be used as a constructor to create documents for this collection based on  the above defined schema
// It acts as a class with find as a static method for finding docs
const SaintsItenary = mongoose.model(
  "SaintsItenary", // it is reference to collection
  saintsItenarySchema, // It's schema for documents  in this collections.
  "Saints_Itenary" // name of collection to insert/read/update/delete
);

module.exports = {
  SaintsItenary,
};
// SaintsItenary.
// const doc1 = new SaintsItenary({
// monoose.model is a function that is used  to create Models
// /models are  used to perform CRUD operations on a Collection
// })
//
