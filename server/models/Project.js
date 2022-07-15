const mongoose = require("mongoose");

//a mongoose schema isn't related to a graphQL schema
//you have the database, then the mongoose layer on top of that (object data mapper layer)
//where we create a schema that includes the fields for our database collections
//then on top of that is our graphQL API, that is where graphQL schema comes in

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  //clientId pertains to the Id of the client model
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
