import mongoose from "mongoose";
import User from "./userModel";
const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    rating:{
        type: Number,
        required:true
    },
    Comment:{
        type:String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" 
    }
},
{timestamps: true})
const movieSchema =   mongoose.Schema({
  moviename:{
    type: String,
    required: true,
  },
 genre:{
    type: String,
    required: true,
 },
 language:{
    type:String,
    required:true,
 },
 description:{
    type:String,
    required:true,
 },
 hero:{
    type:String,
    required:true,
 },
 heroine:{
    type:String,
    required:true,
 },
 director:{
    type:String,
    required:true,
 },
 reviews:[reviewSchema],
 overallrating:{
     type: Number,
     required: true,
     default: 0
 },
 numReviews:{
     type: Number,
     required: true,
     default: 0
 },
 price:{
     type: Number,
     required: true,
     default:0
 },
 
},
{timestamps: true});

const Movie =  mongoose.model("Movie",movieSchema);
export default Movie;