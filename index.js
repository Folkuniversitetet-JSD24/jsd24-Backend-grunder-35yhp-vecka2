import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Skapa CRUD anrop

// Bara för att visa upp något på startsidan
app.get("/", (req, res) => {
  res.send("Hello express server");
});

// CRUD med user

// HÄMTA alla users
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Klas" },
  ];
  res.status(200).json(users);
});

// HÄMTA en specifik användare genom att leta efter id
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Du letade efter användaren med id: ${userId}` });
});

// SKAPA en ny användare
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "Användare skapad!", user: newUser });
});

// UPPDATERA en användare
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.json({
    message: `Användaren med id: ${userId} är uppdaterad`,
    user: updatedUser,
  });
});

// DELETA en användare
app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Användaren med id: ${userId} är borttagen` });
});

// lyssna på servern
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
