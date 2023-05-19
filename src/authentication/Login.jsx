import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "../shared/SocialLogin";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.form?.pathname || '/';

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(res => {
        const user = res.user;
        console.log('login',user);
        navigate(from, {replace: true})
    })
    .then(err => console.log(err))
  };

  return (
    <div className="p-14">
      <form onSubmit={handleSignIn}>
        <div className="mb-6">
          <label className="label">
            Your email
          </label>
          <input
            name="email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-6">
          <label className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-400 px-6 py-4 rounded-md text-xl text-white font-myFont w-full"
        >
          Sign In
        </button>
        <p className="text-center font-myFont my-5">
          New in kidol?<Link className="font-semibold  ml-2" to="/signin">Create Account</Link>
        </p>
      </form>
        <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
