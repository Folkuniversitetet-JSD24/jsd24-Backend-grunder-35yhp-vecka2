import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf } = format;

//  skapa ett anpassat loggformat som ska inkluderar tidpunkt, nivå och meddelande
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// skapa min logger med Winston biblioteket
const logger = createLogger({
  // Kombinera flera format
  format: combine(timestamp({ format: "YYYY-MM-DD:mm:ss" }), logFormat),
  transports: [
    // skapa en loggfil där alla loggar sparas
    new transports.File({ filename: "logs/combined.log" }),

    new transports.Console(),
  ],
});

// Skapa middleware funktionen som loggar alla inkommande request
function logRequests2(req, res, next) {
  logger.info(`${req.method} ${req.url}`);
  next(); // denna göra så att den fortsätter till nästa middleware i kedjan
}

export { logger, logRequests2 };
