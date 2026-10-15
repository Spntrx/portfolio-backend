import dotenv from 'dotenv';
dotenv.config();

// Ensure PORT defaults to 5000 if not set in environment
process.env.PORT = process.env.PORT || 5000;

// Execute the backend server code
import './server/server.js';