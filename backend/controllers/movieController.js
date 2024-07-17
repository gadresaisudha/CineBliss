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

const deleteMovie = asyncHandler(async(req,res)=>{
    const movie = await Movie.findById(req.params.id);
    if(movie){
        await Movie.deleteOne({_id:movie._id})
        res.json({message:"Movie deleted"});
    }
    else{
        res.status(400);
        throw new Error('Movie not Found');
    }
    
});
const getMovie = asyncHandler(async(req,res)=>{

    const currentmovie =await Movie.findById(req.params.id);
    if(currentmovie){
        res.json(currentmovie);
    }
    else{
        res.status(400);
        throw new Error('Movie not Found');
    }
});
const updateMovie = asyncHandler(async(req,res)=>{

    const currentmovie = await Movie.findById(req.params.id);
    if(currentmovie){

        currentmovie.moviename = req.body.moviename || currentmovie.moviename;
        currentmovie.genre = req.body.genre || currentmovie.genre;
        currentmovie.language = req.body.language || currentmovie.language;
        currentmovie.description = req.body.description || currentmovie.description;
        currentmovie.hero = req.body.hero || currentmovie.hero;
        currentmovie.heroine = req.body.heroine || currentmovie.heroine;
        currentmovie.director = req.body.director || currentmovie.director;
        currentmovie.price = req.body.price || currentmovie.price;

        const updatedMovie = await currentmovie.save();
        res.json(updatedMovie);

    }
    else{
        res.status(400);
        throw new Error('Movie not Found');
    }
});



export {createMovie,getAllMovies,deleteMovie,getMovie,updateMovie};