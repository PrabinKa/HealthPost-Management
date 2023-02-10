import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@env"

export const FetchApiReducer = createApi({
    reducerPath: "projects",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        getHealthpostList: builder.query({
            query: () => ({
                url: '/healthpost',
                method: 'GET'
            })
        })
    })
})

export const {useGetHealthpostListQuery} = FetchApiReducer