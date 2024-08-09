import { apiSlice } from "./apiSlice";
import { ORDER_URL } from "../constants";

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        createOrder : builder.mutation({
            query : (order)=>({
                url : ORDER_URL,
                method: "POST",
                body: order

            })
        }),

        getMyOrders : builder.query({
            query: ()=>({
                url :  `${ORDER_URL}/myorders`,
                method : "GET",
            })
        })
        
    })
})