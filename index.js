import express from "express";
import userRouter from "./router/user.js";
import productRouter from "./router/products.js";

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

// Bara för att visa upp något på startsidan
app.get("/", (req, res) => {
  res.send("Välkommen till apiet");
});

// lyssna på servern
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
