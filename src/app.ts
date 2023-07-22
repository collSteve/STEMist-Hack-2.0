import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: Express = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define routes and middleware
// Example:  app.use('/api/auth', require('./routes/authRoutes'));

export default app;