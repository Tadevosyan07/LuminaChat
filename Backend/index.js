const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
dotenv.config()
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": `${process.env.PRIVATEKEY}`}}
    )
    return res.status(r.status).json( r.data )
  } catch (e) {
    console.error(e);
    return res.status(e.r.status).json(e.r.data)
  }
});

const PORT = process.env.PORT || 3003

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
