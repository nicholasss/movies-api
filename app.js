// app.js

// imports
import express from 'express';

// making app
const app = express();

// built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// logging middleware
app.use((req, res, next) => {
	const startTime = performance.now();
	const ip = req.ip;
	const method = req.method;
	const route = req.path;

	// call the route
	next();

	const endTime = performance.now();

	const durationMS = endTime - startTime;
	// const msInSecond = 1000;
	// const secondsDuration = Math.floor(durationMS / msInSecond);

	const logInfo = `${ip} ${method} ${route} - ${durationMS.toFixed(3)}ms`;
	console.log(logInfo);
});

// hello world
app.get('/', (req, res) => {
	res.json({ message: 'Hello World!' });
});

// 404 handler
app.use((req, res, next) => {
	res.status(404).json({ message: 'Route not found' });
});

// error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: 'Something went wrong!' });
});

// exports
export default app;
