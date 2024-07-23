import { apiSlice } from "./apiSlice";
import { MOVIE_URL, UPLOAD_URL } from "../constants";

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
            query: (productId)=>({
                url : `${MOVIE_URL}/${productId}`
            })
        }),
        uploadProductImage : builder.mutation({
            query:(data)=>({
                url:`${UPLOAD_URL}`,
                method : `POST`,
                body : data
            })
        })
        
    })
})

export const {useGetAllMoviesQuery,useCreateMoviesMutation,useGetMovieByIdQuery,useUploadProductImageMutation}= movieApiSlice;