import { apiSlice } from "./apiSlice";
import { MOVIE_URL } from "../constants";

export const movieApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({

        getAllMovies : builder.query({
            query:()=>({
                url: `${MOVIE_URL}`,
            })
        }),

        createMovies : builder.mutation({
            query:(data)=>({
                url: `${MOVIE_URL}`,
                method: 'POST',
                body: data
            })
        }),

        getMovieById : builder.query({
            query: (productId)=>({
                url : `${MOVIE_URL}/${productId}`
            })
        })
        
    })
})

export const {useGetAllMoviesQuery,useCreateMoviesMutation}= movieApiSlice;