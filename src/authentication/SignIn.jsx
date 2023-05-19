import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin";
import { updateProfile } from "firebase/auth";

const SignIn = () => {
  const { createUser,user } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password);
    createUser(email,password)
    .then(res => {
        const user = res.user;
        console.log('signin',user);
        updateProfile(user,{
          displayName: name,photoURL:photo
        })
    })
    .then(err => console.log(err))
  };
  return (
    <div className="p-14">
      <form onSubmit={handleSignUp}>
        <div className="mb-6">
          <label className="label">
            Your Name
          </label>
          <input
            name="name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-6">
          <label className="label">
            Photo Url
          </label>
          <input
            name="photo"
            className="input input-bordered w-full"
            
          />
        </div>
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
          Register new account
        </button>
        <p className="text-center font-myFont my-5">
          Already have an Account?<Link className="font-semibold  ml-2" to="/login">Log In</Link>
        </p>
      </form>
        <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignIn;
