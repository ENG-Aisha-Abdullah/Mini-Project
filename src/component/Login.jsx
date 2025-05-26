import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
        navigate("Home");
     
    } else {
       Swal.fire("Invalid email or password");
    }

  };

  // console.log("Username:", username);
  // console.log("Password:", password)
  //   };
  return (
    <div>
      <div className="bg-gray-200 h-screen w-full flex justify-center items-center ">
        <form
          className="container bg-gray-100 shadow-2xl rounded-2xl w-[90%] p-8 flex flex-col gap-5 justify-center md:w-150"
            onSubmit={handleSubmit}
        >
          <h1 className="text-black text-3xl font-bold">LOGIN</h1>
          {/* Email */}
          <div className="flex gap-1 items-center">
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
              className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-100"
            />
          </div>
          {/* Password */}
          <div className="flex gap-1 items-center">
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
              className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-100"
            />
          </div>

          <button
            type="submit"
            className="bg-amber-200 text-gray-800 font-bold text-xl p-2 rounded hover:bg-amber-300 transition duration-300"
          >
            Login
          </button>
          <p className="text-center text-sm text-gray-700">
            Don't have an account?
            <Link
              className="text-gray-700  font-bold px-2 hover:underline hover:bg-amber-200 p-2 rounded"
              to="SignUp"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
