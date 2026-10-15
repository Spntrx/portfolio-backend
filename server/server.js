import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import express from 'express'; // ES6 and newer javascript

import authMiddleware from './middlewares/auth.js';

import projectsRoutes from './routes/projects-routes.js';
import userRoutes from './routes/user-routes.js';
import contactRoutes from './routes/contact-routes.js';
import qualificationRoutes from './routes/qualification-routes.js';

// Establish DB Connection
mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

const app = express();

app.use(express.json()); // for parsing application/json

// Base API endpoints
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to My Portfolio application.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});