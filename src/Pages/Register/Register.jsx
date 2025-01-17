
import { useForm } from "react-hook-form";
import {  Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()

    const {createUser,profileUpdate}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
       reset,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data)=>{
        console.log(data.photoURL);
       await createUser(data.email,data.password)
        .then(res=>{
            const loggedUser = res.user
            console.log('logged in from sign up', loggedUser);
             profileUpdate(data.name, data.photoURL)
             .then(()=>{
              const userInfo = {
                name:data.name,
                email:data.email,
                badge:data.badge
               
              }
          
              // save to userCollection db
              axiosPublic.post('/users',userInfo)
              .then(res=>{
                if(res.data.insertedId){
                  console.log('user added to the db');
                  reset()
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "user created successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate('/')

                }
              })

             })


        })
       
          .catch((error) => {
            console.error("Error:", error.message);
          });
      };
    return (
        <>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Badge</span>
                </label>
                <input
                  {...register("badge", { required: true })}
                  name="badge"
                  type="text"
                  defaultValue="bronze"
                  readOnly
                  placeholder="Badge"
                  className="input input-bordered"
                  required
                />
                {errors.badge && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  name="photoURL"
                  type="text"
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                  required
                />
                {errors.photoURL && (
                  <span className="text-red-600">photo Url is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                  })}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 text-center">
                    This field is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600 text-center">
                    This field must grater than 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    This field must less than 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    password must be one uppercase,one lowercase,number,special
                    character
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  value="signUp"
                  type="submit"
                />
              </div>
            </form>
            <p className="text-center">
              <small>
                already have An account?{" "}
                <Link className="btn btn-link" to="/login">
                  login
                </Link>
              </small>
            </p>
            
          </div>
        </div>
      </div>
        
        </>
    );
};

export default Register;