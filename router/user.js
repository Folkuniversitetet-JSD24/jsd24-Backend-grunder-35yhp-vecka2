import express from "express";
const router = express.Router();

// Mockadata
const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Klas" },
];

//GET för att: HÄMTA alla users
router.get("/", (req, res) => {
  res.status(200).json(users);
});

// HÄMTA en specifik användare genom att leta efter id
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Användaren hittade inte" });
  }
});

// POST: SKAPA en ny användare
router.post("/", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: "Användare skapad!", user: newUser });
});

//PUT:  UPPDATERA en användare
router.put("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  const index = users.findIndex((u) => u.id === userId);
  if (index !== -1) {
    users[index] = updatedUser;
    res
      .status(200)
      .json({ message: "Andaren är uppdaterad", user: updatedUser });
  } else {
    res
      .status(404)
      .json({ message: "Användaren hittade inte och kunde inte uppdateras" });
  }
});

//DELETE: DELETA en användare
router.delete("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === userId);

  if (index !== -1) {
    users.splice(index, 1);
    res.status(200).json({ message: `Andaren med id ${userId} är raderad` });
  } else {
    res
      .status(404)
      .json({ message: "Användaren hittade inte och kunde inte raderas." });
  }

  res.json({ message: `Användaren med id: ${userId} är borttagen` });
});

export default router;
