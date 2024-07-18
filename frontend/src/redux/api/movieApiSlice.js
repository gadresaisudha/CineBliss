import { apiSlice } from "./apiSlice";
import { MOVIE_URL } from "../constants";

export const movieApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({

        getAllMovies : builder.query({
            query:()=>({
                url: `${MOVIE_URL}`,
            })
        }),
        
    })
})

export const {useGetAllMoviesQuery}= movieApiSlice;