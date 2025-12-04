// movies controllers

// imports
import express from 'express';
import Movie from '../models/Movie.js';

/**
	* Returns all movies from the database
	* @param {express.Request} req 
	* @param {express.Response} res
	**/
async function getMovies(req, res) {

	try {
		const movies = await Movie.find();
		res.json(movies)

	} catch (err) {
		console.error(err)
		res.status(500)
	}
}

export { getMovies };
