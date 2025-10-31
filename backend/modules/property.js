const mongoose =require( "mongoose");

const propertySchema = new mongoose.Schema({
  propertyName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  location: {
    type: String,
    required: true,
  },
   description: {
    type: String,
    required: true,
  },
   imageurl: {
    type: String,
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports=Property;
