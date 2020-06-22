const db = require("../models");
const Cards = db.cards;

exports.create = (req, res) => {

 if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const cards = new Cards({
    img: req.body.img,
    name: req.body.name,
    magic: req.body.magic,
    str: req.body.str,
    fire: req.body.fire
  });

  cards
    .save(cards)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cards."
      });
    });  
};

exports.findAll = (req, res) => {
};

exports.findOne = (req, res) => { 
};

exports.update = (req, res) => {  
};

exports.delete = (req, res) => {  
};

exports.deleteAll = (req, res) => {
};

exports.findAllPublished = (req, res) => {
};