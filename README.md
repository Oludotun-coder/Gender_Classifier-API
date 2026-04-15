This is a node.js + Express API that classifies gender based on a given name using the Genderize API. The response is processed and checked before being returned.

Base Endpoint
GET /api/classify?name=<name>

Success Response

Success Response
```json
{
  "status": "success",
  "data": {
    "name": "jerry",
    "gender": "male",
    "probability": 0.99,
    "sample_size": 1234,
    "is_confident": true,
    "processed_at": "2026-04-15T20:42:49.837Z"
  }
}

Error Responses
400 Bad Request
422 Unprocessable Entity

Tech Stacks
Node.js
Axios
CORS
Express

Live URL
