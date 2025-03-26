import express from "express";
import morgan from "morgan"; //morgan är ett HTTP-request loggningsbibliotek

import { logRequests2 } from "./middleware/logger.js";
import requestCounter from "./middleware/requestCounter.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = 8000;

// morgan 3:e parts bibliotek/middleware loggar inkommande requests till teminalen.

// "dev"  är ett fördefinierat format som visar metod, URL, statuskod, svarstid och storlek på svaret.
app.use(morgan("dev"));

app.use(logRequests2);
app.use(requestCounter);

app.get("/", (req, res) => {
  res.send("HEllooo Middlewares");
});

// En route som avsiktligen kastar ett fel för demonstrations syfte
app.get("/error", (req, res) => {
  throw new Error("Simulerat kastat serverfel.");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Severn körs på http://localhost:${PORT}`);
});
