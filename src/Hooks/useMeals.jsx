import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMeals = (sort,search)=>{


//  const [menu, setMenu] = useState([]);
//  const [loading,setLoading]=useState(true)
  // useEffect(() => {
  //   fetch("https://final-server-ten-chi.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data)
  //       setLoading(false)
  //     });
  // }, []);
  const axiosPublic = useAxiosPublic()

  const {data:meals=[],isLoading:loading,refetch, } = useQuery({
    queryKey:['meals',sort],
    queryFn:async()=>{
      const res=await axiosPublic.get(`/meals?sort=${sort}?search=${search}`);
      return res.data
    }
  })
  return [meals,loading,refetch]
}


export default useMeals