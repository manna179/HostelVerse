import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const useReview = ()=>{
  const axiosSecure = useAxiosSecure()

  const {data:review=[],isLoading:loading,refetch } = useQuery({
    queryKey:['reviews'],
    queryFn:async()=>{
      const res=await axiosSecure.get('/reviews');
      return res.data
    }
  })
  return [review,loading,refetch]
}
export default useReview