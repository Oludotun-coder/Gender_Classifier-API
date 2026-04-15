const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();


app.use(cors());

const PORT = process.env.PORT || 3000;

// Endpoint to fetch data from API
app.get('/api/classify', async (req, res) => {
  const { name } = req.query;

  // Missing or empty name
  if (!name || name.trim() === '') {
    return res.status(400).json({
      status: "error",
      message: "Missing or empty name"
    });
  }

 if (typeof name !== 'string' || !/^[a-zA-Z]+$/.test(name.trim())) {
  return res.status(422).json({
    status: "error",
    message: "Name must be a valid string"
  });
}


try {
  const response = await axios.get(
    `https://api.genderize.io?name=${name}`
  );

  if (!data) throw new Error("Invalid API response");

  if (data.gender === null || data.count === 0) {
  return res.status(400).json({
    status: "error",
    message: "No prediction available for the provided name"
  });
}

const gender = data.gender;
const probability = data.probability;
const sample_size = data.count;

const is_confident =
  probability >= 0.7 && sample_size >= 100;

const processed_at = new Date().toISOString();

return res.status(200).json({
  status: "success",
  data: {
    name,
    gender,
    probability,
    sample_size,
    is_confident,
    processed_at
  }
});

  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch data from external API"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});