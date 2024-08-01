import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema;
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
  image:{
    type: String,
    required: true,
},
 genre:{
    type: String,
    enum : ['Action',
        'Comedy',
        'Drama',
        'Fantasy',
        'Horror',
        'Mystery',
        'Romance',
        'Thriller',
        'Animated'],
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
 category:{
    type: String,
    enum : ['Free','Buy','Rent'],
    required: true,
},
},
{timestamps: true});

const Movie =  mongoose.model("Movie",movieSchema);
export default Movie;