import { useMutation } from "@tanstack/react-query"
import { axiosSecure } from "./useAxiosSecure"

export  const useChangeRole = ()=>{
    return useMutation({
        mutationKey:["changeRole"],
        mutationFn:async(payload)=>{
            const {data}= await axiosSecure.put(`/changeRole/${payload.email}`,payload.data)
            return data
        }
        
    })
}

