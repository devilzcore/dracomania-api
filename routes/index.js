module.exports = app => {
  const cards = require("../controllers/cardsController");

  var router = require("express").Router();

  router.post("/", cards.create);

  router.get("/", cards.findAll);

  router.get("/published", cards.findAllPublished);

  router.get("/:id", cards.findOne);

  router.put("/:id", cards.update);

  router.delete("/:id", cards.delete);

  router.delete("/", cards.deleteAll);

  app.use('/api/cards', router);
};