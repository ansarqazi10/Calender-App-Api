const router = require("express").Router();
const eventsManager = require("../managers/events");

router.post("/", async (req, res) => {
  try {
    let event = await eventsManager.create(req.body);
    return res.status(200).send(event);
  } catch (ex) {
    return res.status(500).send(ex.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let event = await eventsManager.update(req.params.id, req.body);
    return res.status(200).send(event);
  } catch (ex) {
    return res.status(500).send(ex.message);
  }
});

router.get("/", async (req, res) => {
  try {
    let events = await eventsManager.get();
    return res.status(200).send(events);
  } catch (ex) {
    return res.status(500).send(ex.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let event = await eventsManager.getById(req.params.id);
    return res.status(200).send(event);
  } catch (ex) {
    return res.status(500).send(ex.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let event = await eventsManager.delete(req.params.id);
    return res.status(200).send(event);
  } catch (ex) {
    return res.status(500).send(ex.message);
  }
});

module.exports = router;