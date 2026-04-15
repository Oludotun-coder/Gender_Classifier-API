This is a node.js + Express API that classifies gender based on a given name using the Genderize API. The response is processed and checked before being returned.

BASE ENDPOINT
GET /api/classify?name=jerry

SUCCESS RESPONSE
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

- ERROR RESPONSE

400 BAD REQUEST

{
  "status": "error",
  "message": "Name is required"
}

422 UNPROCESSABLE ENTITY

{
  "status": "error",
  "message": "Name must be a valid string"
}

TECH STACK

* Node.js
* Express
* Axios
* CORS


INSTALLATION
npm install

RUN SERVER
node server.js

LIVE URL = genderclassifier-api-production.up.railway.app


