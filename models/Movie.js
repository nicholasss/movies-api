// movie schema
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const MovieSchema = new Schema({
	name: String,
	releaseYear: {
		type: Number,
		min: 1900,
		max: 2050,
	},
	length: Number, // minutes
	studio: String,
	language: String,
	country: String,
	director: String,
	cast: [String],
	crew: [String],
});

const Movie = model('Movie', MovieSchema);

export default Movie;
