// server.js

// load .env
require('@dotenvx/dotenvx').config();

const mongoose = require('mongoose');
const initApp = require('./app.js');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = initApp();

async function startServer() {
	try {
		await mongoose.connect(MONGODB_URI);
		console.log('Connected to MongoDB');

		app.listen(PORT, () => {
			console.log(`Server is running on localhost:${PORT}`);
		});
	} catch (error) {
		console.error('Failed to start server:', error);
		process.exit(1);
	}
}

startServer();
