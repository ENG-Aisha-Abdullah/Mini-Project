import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [rePassword, setRePassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();


       if (name.length < 3) {
      return  Swal.fire("Name must be at least 3 characters long");
    } else if (name.length > 50) {
      return  Swal.fire("Name must be less than 50 characters");
    }

    if (password.length < 8) {
      return  Swal.fire("Password must be at least 8 characters long");
    }

    if (password !== rePassword) {
      return  Swal.fire("Passwords must be matched");
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("name", name);

     Swal.fire("Sign Up successful!");

    navigate("/");

   
  };
  

  // console.log("Username:", username);
  // console.log("Password:", password)
    // };
  return (
    <div>
      <div className="bg-gray-200 h-screen w-full flex justify-center items-center ">
        <form
          className="container bg-gray-100 shadow-2xl rounded-2xl w-[90%] p-8 flex flex-col gap-5 justify-center md:w-150"
            onSubmit={handleSubmit}
        >
          <h1 className="text-black text-3xl font-bold">SignUp</h1>

          {/* Name */}
          <div className="flex gap-1 items-center max-sm:flex-col max-sm:items-start">
            <label
              className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap"
              htmlFor="username"
            >
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              placeholder="name"
              className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-full"
            />
            <p></p>
          </div>
          {/* Email */}
          <div className="flex gap-1 items-center max-sm:flex-col max-sm:items-start">
            <label
              className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Email@email.com"
              className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-full"
            />
          </div>
          {/* Password */}
          <div className="flex gap-1 items-center max-sm:flex-col max-sm:items-start">
            <label
              className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Password"
              className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-full"
            />
          </div>
          {/* Re Password */}
          <div className="flex gap-1 items-center max-sm:flex-col max-sm:items-start">
            <label
              className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              type="password"
              required
              placeholder="Re Password"
              className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-amber-200 text-gray-800 font-bold text-xl p-2 rounded hover:bg-amber-300 transition duration-300"
          >
            
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-700">
            Yoy already have an account?
            <Link
              className="text-gray-700  font-bold px-2 hover:underline hover:bg-amber-200 p-2 rounded"
              to="/"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
