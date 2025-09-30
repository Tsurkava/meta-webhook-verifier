const express = require("express");
const app = express();

const VERIFY_TOKEN = "tsurkava123"; // тот самый маркер

app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token && mode === "subscribe" && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.listen(3000, () => console.log("Webhook is listening on port 3000"));
