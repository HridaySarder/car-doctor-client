import { Link } from "react-router-dom";
import image from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthCotext } from "../../providers/AuthProvider";

const SignUp = () => {

  const {createUser} = useContext(AuthCotext)

    const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,email,password);
      createUser(email,password)
      .then(res => {
        console.log(res.user);
      })
      .catch(error => {
        console.error(error);
      })
    }
    

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="w-1/2 mr-12">
       
      <img src={image} alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSignUp} className="card-body">
        <h1 className="text-4xl font-bold text-center">Login</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
       
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
        <p className='text-center pb-7'>Already have an account? <Link className='text-[#FF3811] font-bold' to={'/login'}>Login</Link></p>
      </div>
    </div>
  </div>
  );
};

export default SignUp;