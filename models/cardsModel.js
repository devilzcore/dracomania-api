const { urlencoded } = require("body-parser")

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        img: String,
        name: String,
        magic: Number,
        str: Number,
        fire: Number
      })
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject()
      object.id = _id 
      return object 
    })
  
    const Cards = mongoose.model("cards", schema)
    return Cards
  }