const { SaintsItenary } = require("../Models/Saints_Itenary");

const resolvers = {
  Query: {
    getAll: async () => {
      console.log("querying being passed");
      const allSaints = await SaintsItenary.find({ deleted: false });
      console.log({ allSaints });
      return allSaints;
    },
  },

  Mutation: {
    addSaintsItenary: async (_, args) => {
      const {
        createdAt,
        updatedAt,
        deleted,
        Experience_id,
        UserId,
        postLink,
        Info,
        Images,
        Videos,
        Reviews,
      } = args.input;
      const saintsItenary = new SaintsItenary({
        createdAt: createdAt,
        updatedAt: updatedAt,
        deleted: deleted,
        Experience_id: Experience_id,
        UserId: UserId,
        postLink: postLink,
        Info: Info,
        Images: Images,
        Videos: Videos,
        Reviews: Reviews,
      });

      try {
        await saintsItenary.save();
        console.log("saved");
        return saintsItenary;
      } catch (error) {
        return "Something went wrong!";
      }
    },

    updateSaintsItenary: async (_, args) => {
      const {
        _id,
        createdAt,
        updatedAt,
        deleted,
        Experience_id,
        UserId,
        postLink,
        Info,
        Images,
        Videos,
        Reviews,
      } = args.input;
      const saintsItenary = await SaintsItenary.findOne({ _id: _id });
      saintsItenary.createdAt = createdAt;
      saintsItenary.updatedAt = updatedAt;
      saintsItenary.deleted = deleted;
      saintsItenary.Experience_id = Experience_id;
      saintsItenary.UserId = UserId;
      saintsItenary.postLink = postLink;
      saintsItenary.Info = Info;
      saintsItenary.Images = Images;
      saintsItenary.Videos = Videos;
      saintsItenary.Reviews = Reviews;

      try {
        await saintsItenary.save();
        console.log("updated");
        return saintsItenary;
      } catch (error) {
        console.log(error);
        return "Something went wrong!";
      }
    },

    deleteSaintsItenary: async (_, args) => {
      const { _id } = args;
      const saintsItenary = await SaintsItenary.findOne({ _id: _id });
      try {
        saintsItenary.deleted = true;
        await saintsItenary.save();
        return saintsItenary;
      } catch (error) {}
    },
  },
};

module.exports = {
  resolvers,
};
