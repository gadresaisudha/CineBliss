import { apiSlice } from "./apiSlice";
import { MOVIE_URL, UPLOAD_URL } from "../constants";
import { getTopMovies } from "../../../../backend/controllers/movieController";

export const movieApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({

        getAllMovies : builder.query({
            query:()=>({
                url: `${MOVIE_URL}`,
            })
        }),

        createMovies : builder.mutation({
            query:(movieData)=>({
                url: `${MOVIE_URL}`,
                method: 'POST',
                body: movieData
            })
        }),

        getMovieById : builder.query({
            query: (movieId)=>({
                url : `${MOVIE_URL}/${movieId}`
            })
        }),
        uploadProductImage : builder.mutation({
            query:(data)=>({
                url:`${UPLOAD_URL}`,
                method : `POST`,
                body : data
            })
        }),
        getTopMovies : builder.query({
            query : ()=>({
                url: `${MOVIE_URL}/top`
            })
        })
        
    })
})

export const {useGetAllMoviesQuery,useCreateMoviesMutation,useGetMovieByIdQuery,useUploadProductImageMutation, useGetTopMoviesQuery}= movieApiSlice;