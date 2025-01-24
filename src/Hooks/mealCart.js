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
export const useGetAllCartMeal = (email) => {
    return useQuery({
      queryKey: ['mealCart', email || "all"],
      queryFn: async () => {
        const endpoint = email ? `/mealCart?email=${email}` : `/mealCart`;
        const { data } = await axiosSecure.get(endpoint);
        return data;
      },
      enabled: true, 
    });
  };
  

 export const useGetSingleMeal=(id)=>{
    return useQuery({
        queryKey:["singleQuery" ,id],
        queryFn:async()=>{
            const {data}= await axiosSecure.get(`/meals/${id}`)
            return data 
        }
    })
}
 


export  const useSingleMealUpdate = ()=>{
    return useMutation({
        mutationKey:["updateSingleMeal"],
        mutationFn:async(payload)=>{
            const {data}= await axiosSecure.put(`/mealCart/${payload.id}`,payload.data)
            return data
        }
        
    })
}