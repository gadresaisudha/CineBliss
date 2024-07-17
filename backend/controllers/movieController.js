import asyncHandler from "../middleware/asyncHandler.js";
import Movie from '../models/movieModel.js';

const createMovie = asyncHandler(async(req,res)=>{
const {moviename,genre,language,description,hero,heroine,director,price} = req.body;

if(!moviename||!genre||!language||!description||!hero||!heroine||!director||!price){
   throw new Error('please fill all fields')
}
const movieExists = await Movie.findOne({moviename});
if(movieExists){
    res.status(400).send("Movie already exists")
}
const newMovie = new Movie({moviename,genre,language,description,hero,heroine,director,price});
try{
    await newMovie.save();
    res.status(200).json({
        _id: newMovie._id,
        moviename : newMovie.moviename,
        hero : newMovie.hero,
        heroine : newMovie.heroine,
        director: newMovie.director,
        price : newMovie.price
    })
}
catch(error){
    res.status(400);
    throw new Error(`$error`)
}
});

const getAllMovies = asyncHandler(async(req,res)=>{
  const movies = await Movie.find({});
  res.json(movies);
});





export {createMovie,getAllMovies};