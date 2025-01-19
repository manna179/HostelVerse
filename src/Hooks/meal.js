import { useMutation, useQuery } from "@tanstack/react-query"
import { axiosSecure } from "./useAxiosSecure"

export  const useMealUpdate = ()=>{
    return useMutation({
        mutationKey:["updateMeal"],
        mutationFn:async(payload)=>{
            const {data}= await axiosSecure.put(`/meals/${payload.id}`,payload.data)
            return data
        }
        
    })
}

 export const useGetSingleMeal=(id)=>{
    return useQuery({
        queryKey:["singleQuery" ,id],
        queryFn:async()=>{
            const {data}= await axiosSecure.get(`/meals/${id}`)
            return data 
        }
    })
}