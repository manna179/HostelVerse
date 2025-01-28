import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";


 const useReview = (email) => {
  return useQuery({
    queryKey: ['reviews', email],
    queryFn: async () => {
      const endpoint = email ? `/reviews?email=${email}` : `/reviews`;
      const { data } = await axiosSecure.get(endpoint);
      return data;
    },
    enabled: true, 
  });
};
export default useReview

export const useGetSingleReview=(id)=>{
  return useQuery({
      queryKey:["singleReview" ,id],
      queryFn:async()=>{
          const {data}= await axiosSecure.get(`/reviews/${id}`)
          return data 
      }
  })
}



export  const useSingleReviewUpdate = ()=>{
  const axiosPublic = useAxiosPublic()
  return useMutation({
      mutationKey:["updateSingleReview"],
      mutationFn:async(payload)=>{
          const {data}= await axiosPublic.put(`/reviews/${payload.id}`,payload.data)
          return data
      }
      
  })



}
