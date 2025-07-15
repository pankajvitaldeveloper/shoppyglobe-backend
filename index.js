require('dotenv').config({ quiet: true });
const connectDB = require('./config/db');
const app = require('./app');

connectDB(); // Uses process.env.MONGO_URI

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
