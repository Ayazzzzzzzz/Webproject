import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js'; // Ensure this path is correct based on your project structure
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Corrected usage with parentheses
app.use(cookieParser());
app.use(cors());

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`); // Corrected console.log syntax with backticks
});

// Add the user routes to the application
app.use('/api/user', userRoute);
app.use('/api/residency', residencyRoute);
