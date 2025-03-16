const express = require('express');
const bodyParser = require('body-parser');
const pointsRoutes = require('./routes/pointsRoutes');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:80'] 
};

app.use(cors(corsOptions));

app.use('/points', pointsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});