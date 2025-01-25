// Define the endpoint
app.get('/status-info', (req, res) => {
  const code = parseInt(req.query.code, 10); // Parse the code from the query parameter

  // Validate input
  if (!code) {
      return res.status(400).json({ error: "Code parameter is required and must be a number." });
  }

  // Define the status codes and their descriptions
  const statusCodes = {
      200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
      201: "Created: The request has succeeded, and a new resource has been created as a result.",
      204: "No Content: The server successfully processed the request and is not returning any content.",
      400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
      401: "Unauthorized: Authentication is required and has failed or has not yet been provided.",
      403: "Forbidden: The server understands the request but refuses to authorize it.",
      404: "Not Found: The server has not found anything matching the request URI.",
      405: "Method Not Allowed: The method specified in the request is not allowed for the resource.",
      429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
      500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
      502: "Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.",
      503: "Service Unavailable: The server is not ready to handle the request (e.g., maintenance or overload).",
      504: "Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server."
  };

  // Find the description for the provided code
  const message = statusCodes[code];

  // If the code is not in the predefined list, return a 400 error
  if (!message) {
      return res.status(400).json({ error: "Unsupported status code. Please provide a valid HTTP status code from the predefined list." });
  }

  // Respond with the status code and description
  res.json({
      status: code,
      message
  });
});
