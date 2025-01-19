import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";


const GoogleLogin = () => {
    const navigate = useNavigate()
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(res=>{
            console.log(res.user);
            const userInfo = {
                name:res.user.displayName,
                email:res.user.email,
                badge:"bronze"

            }
            axiosPublic.post('/users',userInfo)
            .then(response=>{
                console.log(response.data);
                navigate('/')

            })
        }).catch(err=>{
            console.log(err.message);
        })
    }
    return (
        <div>
             <div className="divider"></div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn bg-[#007bff] hover:bg-[#007bff] w-10/12 mx-auto mb-3 "> 
                    <FaGoogle></FaGoogle>
                    Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;