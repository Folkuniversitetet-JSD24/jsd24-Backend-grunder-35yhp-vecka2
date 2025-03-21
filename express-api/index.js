// Här kommer code along kod skrivas:
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Route för root-enpoint
app.get("/", (req, res) => {
  res.send("Välkommen till din första Express-server!");
});

// API Route som ska retunera JSON med json()
app.get("/api", (req, res) => {
  res.json([
    { message: "API:et fungerar", status: 200 },
    { message: "API:et fungerar 2", status: 201 },
  ]);
});

// API Route som ska retunera JSON med send()
app.get("/api2", (req, res) => {
  res.send([
    { message2: "API:et fungerar", status2: 200 },
    { message2: "API:et fungerar 2", status2: 201 },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server körs på http://localhost:${PORT}`);
});
