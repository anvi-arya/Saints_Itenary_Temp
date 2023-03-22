const { SaintsItenary } = require("../Models/Saints_Itenary");

const resolvers = {
  Query: {
    getAll: async () => {
      const allSaints = await SaintsItenary.find({});
      console.log(allSaints);
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
  },
};

module.exports = {
  resolvers,
};
