import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FetchApiReducer = createApi({
    reducerPath: "projects",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://10.0.2.2/healthpost/api/",
    }),
    endpoints: (builder) => ({
        getHealthpostList: builder.query({
            query: () => ({
                url: 'healthpost',
                method: 'GET'
            })
        })
    })
})

export const {useGetHealthpostListQuery} = FetchApiReducer