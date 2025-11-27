// server.js

// load .env
import '@dotenvx/dotenvx/config';

import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// check if undefined or null, will not throw ReferenceError
if (MONGODB_URI == null) {
	console.error('Failed to load MONGODB_URI from .env');
	process.exit(1);
}

async function startServer() {
	try {
		await mongoose.connect(MONGODB_URI);
		console.log('Connected to MongoDB');

		// start express app
		app.listen(PORT, () => {
			console.log(`Server is running on localhost:${PORT}`);
		});
	} catch (error) {
		console.error('Failed to start server:', error);
		process.exit(1);
	}
}

startServer();
