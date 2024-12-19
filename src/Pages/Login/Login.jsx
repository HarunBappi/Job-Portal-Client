import axios from "axios";
import Lottie from "lottie-react";
import { useContext } from "react";
import loginLottieData from "../../assets/login.json";
import AuthContext from "../../Context/AuthContext";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

export default function Login() {
  const { signInUser } = useContext(AuthContext);
  // const location = useLocation()
  // const navigate = useNavigate()
  // const form = location.state || ''
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log("Sign in",result.user.email);
        const user = {email : email}
        axios.post('https://job-portal-server-woad.vercel.app/jwt', user, {
          withCredentials: true 
        })
        .then(res =>{
          console.log(res.data)
        })

        // navigate(form)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center mt-4 mb-4">Sign In</h1>
         
                      <SocialLogin></SocialLogin>
                      <div className="divider">OR</div>
          <form onSubmit={handleLogin} className="card-body">
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
