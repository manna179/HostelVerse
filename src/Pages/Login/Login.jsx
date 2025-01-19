import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { data, Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import GoogleLogin from "../Register/GoogleLogin/GoogleLogin";
import animationLogin from '../../assets/lottie/login.json'
import Lottie from "lottie-react";

const Login = () => {
    const navigate = useNavigate()
  const location = useLocation()
  const { signIn } = useContext(AuthContext);
  const {
          register,
          handleSubmit,
         
          formState: { errors },
        } = useForm();

const onsubmit = (data)=>{
    console.log(data);
    signIn(data.email,data.password)
    .then(res=>{
        const user = res.user;
        console.log('user logged in from login page', user);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "user logged in successfully",
            showConfirmButton: false,
            timer: 1500
          });
        })
        navigate(from,{replace:true})
}
let from = location.state?.from?.pathname || "/";

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     signIn(email,password)
//     .then(res=>{
//         console.log( 'logged in from login page ', res.user);

//     })
//   };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
         
         <Lottie animationData={animationLogin}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleSubmit(onsubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
              {...register("email",{ required: true })}
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              {...register("password",{required:true})}
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#007bff] hover:bg-[#007bff]">Login</button>
            </div>
            <p>Have no account? <Link to='/register' className="btn btn-link">Register</Link></p>
          </form>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
