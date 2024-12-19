import Lottie from "lottie-react";
import { useContext, useState } from "react";
import RegisterLottieData from "../../assets/register.json";
import AuthContext from "../../Context/AuthContext";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

export default function Register() {
  const [error, setError] = useState("");
const {createUser, setUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    setError('')
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
 
    // Password Validation
    const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!passwordValidation.test(password)) {
      setError(
        "Password must be at least One Uppercase, one Lowercase, one number & minimum 6 character"
      );
      return;
    }
    // console.log("Registration Succesfully",name, email, password);

    createUser ( email, password)
    .then(result =>{
      setUser({displayName: name})
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message)
    })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={RegisterLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center mt-4">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {
                error && <p className="text-sm text-red-600">{error}</p>
            }
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
}
