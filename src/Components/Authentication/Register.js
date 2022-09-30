import React from "react";
import { Link, useNavigate } from "react-router-dom";
import facebookLogo from "../../../src/Assets/Icons/facebook (1).png";
import githubLogo from "../../../src/Assets/Icons/github.png";
import googleLogo from "../../../src/Assets/Icons/google.png";
import bgRegister from "../../../src//Assets/Images/audi.jpg";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "./Firebase/Firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signUpError;
    
    if ( loading || gLoading || updating) {
      return <Loading></Loading>;
    }
    if (userError || gError || updateError === "Firebase: Error (auth/user-not-found).") {
      signUpError = Swal.fire( userError?.message || gError?.message || updateError?.message)
    }
    
    if (user || gUser) {
      console.log(user || gUser);
    }
  const onSubmit = async (data) => {
console.log(data)
await createUserWithEmailAndPassword(data.email, data.password);
await updateProfile({ displayName: data?.name });
console.log("update done");
navigate('/')

  };
  if (user) {
    console.log(user);
  }
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ backgroundImage: `url(${bgRegister})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ">
          <h1 className="text-5xl font-bold text-white">Register now!</h1>
          <p className="py-6 text-white">
            To get batter performance Please Register. You can buy and sell your
            pets. Also you can get all kind of service for your pets.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name start */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  {...register("fullName", {
                    min: {
                      value: 3,
                      message: "error message",
                    },
                  })}
                />
              </div>
              {/* name end  */}

              {/* email start */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a Valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <p role="alert" className="text-red-400 text-start">{errors?.email?.message}</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p role="alert" className="text-red-400 text-start">{errors?.email?.message}</p>
                  )}
                </label>
              </div>
              {/* email end  */}
              {/* Password start */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 Characters or longer' 
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <p role="alert" className="text-red-400 text-start">{errors?.password?.message}</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p role="alert" className="text-red-400 text-start">{errors?.password?.message}</p>
                  )}
                </label>
              </div>
              {/* password end  */}
              <input type="submit" value="REGISTER"  className="w-full px-8 my-5 bg-green-500 rounded-lg py-4 text-white font-semibold"/>
              <label className="label">
                <p className="label-text-alt link link-hover text-start">
                  Already Register? <Link to="/login">Login Now!</Link>
                </p>
              </label>
            </form>
            <div className="divider">OR</div>
            <div className="mt-8">
              <button className="btn glass btn-circle">
                <img className="w-8" src={facebookLogo} alt="" />
              </button>
              <button className="btn glass btn-circle mx-4">
                <img className="w-8" src={githubLogo} alt="" />
              </button>
              <button
                className="btn glass btn-circle"
                onClick={() => signInWithGoogle()}
              >
                <img className="w-8" src={googleLogo} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
