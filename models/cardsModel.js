const { urlencoded } = require("body-parser")

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        _id: Number,
        img: String,
        name: String,
        magic: Number,
        str: Number,
        fire: Number
      },

      { versionKey: false }
    )

    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject()
      object.id = _id 
      return object 
    })

    schema.pre('save', function (next) {
      // Only increment when the document is new
      if (this.isNew) {
        Cards.count().then(res => {
          this._id = res // Increment count
          next()
        })
      } else {
        next()
      }  
    })
    
    const Cards = mongoose.model("cards", schema)
    return Cards
  }