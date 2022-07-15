const mongoose = require("mongoose");

//a mongoose schema isn't related to a graphQL schema
//you have the database, then the mongoose layer on top of that (object data mapper layer)
//where we create a schema that includes the fields for our database collections
//then on top of that is our graphQL API, that is where graphQL schema comes in

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("Client", ClientSchema);
