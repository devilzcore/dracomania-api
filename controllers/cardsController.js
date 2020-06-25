const db = require("../models")
const Cards = db.cards

// Create and Save a new cards
exports.create = (req, res) => {
 // Validate request
 if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" })
    return
  }

  // Create a cards
  const cards = new Cards({
    img: req.body.img,
    name: req.body.name,
    magic: req.body.magic,
    str: req.body.str,
    fire: req.body.fire,
  })

  // Save cards in the database
  cards
    .save(cards)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cards."
      })
    })  
}

// Retrieve all cards from the database.
exports.findAll = (req, res) => {
    const name = req.query.name
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {}
  
    Cards.find(condition)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cards."
        })
      })
}

// Find a single cards with an id
exports.findOne = (req, res) => {
    const id = req.params.id

    Cards.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found card with id " + id })
        else res.send(data)
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving card with id=" + id })
      })
}

// Update a cards by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        })
      }
    
      const id = req.params.id
    
      Cards.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update card with id=${id}. Maybe card was not found!`
            })
          } else res.send({ message: "Card was updated successfully." })
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating card with id=" + id
          })
        })
}

// Delete a cards with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id

    Cards.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete card with id=${id}. Maybe card was not found!`
          })
        } else {
          res.send({
            message: "Card was deleted successfully!"
          })
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete card with id=" + id
        })
      }) 
}

// Delete all cardss from the database.
exports.deleteAll = (req, res) => {
    Cards.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Cards were deleted successfully!`
      })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all cards."
      })
    })
}

// Find all published cardss
exports.findAllPublished = (req, res) => {
    Cards.find({ published: true })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cards."
      })
    })
}