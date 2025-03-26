let requestCount = 0;

function requestCounter(req, res, next) {
  requestCount++;

  console.log(`Totalt antal inkommande requests: ${requestCount}`);
  next();
}

export default requestCounter;
