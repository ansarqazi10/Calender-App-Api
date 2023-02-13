const router = require("express").Router();
const usersManager = require("../managers/users");

router.post("/", async (req, res) => {
  try {
    if(req.body.email === "admin@calendarapp.com" && req.body.password === "Admin@123") {
      let admin = {name: req.body.name, password: req.body.password, email: req.body.email, isAdmin: true, loginDate: req.body.loginDate, }
      let user = await usersManager.create(admin);
      return res.status(200).send(user);
    }
    let user = await usersManager.create(req.body);
    return res.status(200).send(user);
  } catch (ex) {
    return res.status(500).send(ex.message);
  }
});

router.post("/getByEmail", async (req, res) => {
  try {
    let user = await usersManager.getByEmail(req.body);
    return user ? res.status(200).send(user) : res.status(400).send("Email or password is incorrect.");
  } catch (ex) {
    return res.status(500).send(ex.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let user = await usersManager.update(req.params.id, req.body);
    return res.status(200).send(user);
  } catch (ex) {
    return res.status(500).send(ex.message);
  }
});

router.get("/", async (req, res) => {
  try {
    let users = await usersManager.get();
    return res.status(200).send(users);
  } catch (ex) {
    return res.status(500).send(ex.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let user = await usersManager.getById(req.params.id);
    return res.status(200).send(user);
  } catch (ex) {
    return res.status(500).send(ex.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let user = await usersManager.delete(req.params.id);
    return res.status(200).send(user);
  } catch (ex) {
    return res.status(500).send(ex.message);
  }
});

module.exports = router;