import React, { useState } from "react";
import Swal from "sweetalert2";
function Home() {
  const fullname = localStorage.getItem("name");
const [weight, setWeight] = useState("");
const [height, setHeight] = useState("");

 const BMI = (weight / ((height / 100) ** 2));
    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire(`Your (BMI) is: ${BMI}`);

        }
    const BMIstate = (e) => {
        e.preventDefault();
       if (`${BMI}` < 18.5) {
        Swal.fire(`Under Weight`);
    } else if (`${BMI}` >= 18.5 && `${BMI} `< 24.9) {
        Swal.fire(`Normal Weight`);
    } else if (`${BMI}` >= 25.0 && `${BMI} `< 29.9) {
        Swal.fire(`Over Weight`);
    }else if (`${BMI}` >= 30.0 && `${BMI} `< 34.9) {
        Swal.fire(`Over Over Weight`);
    }else if (`${BMI}` > 35.0) {
        Swal.fire(`sick`);
    }
    }

    const PerfectBMI = (e) => {
        e.preventDefault();
       const perfect = height - 100 ;
        Swal.fire(`Your Perfect Body Mass Index is: ${perfect}`);
    }
    


        
  return (
    <div className="h-screen bg-gray-200 flex flex-col items-center justify-center  gap-4">
      <div className=" flex flex-col items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800 ">
          Welcome, {fullname}
        </h1>
      </div>
      <form
        className="container bg-gray-100 shadow-2xl rounded-2xl w-[90%] p-8 flex flex-col gap-5 justify-center md:w-150"
        onSubmit={handleSubmit}
      >
        <h1 className="text-black text-3xl font-bold">
            Body Mass Index (BMI) Calculator
        </h1>
        {/* weight */}
        <div className="flex gap-1 items-center">
          <label
            className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap"
            htmlFor="email"
          >
             weight
          </label>
          <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              required
            placeholder="Enter your weight"
            className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-100"
          />
        </div>
        {/* Password */}
        <div className="flex gap-1 items-center">
          <label
            className="text-gray-500 font-bold text-xl min-w-30 block whitespace-nowrap"
            htmlFor="password"
          >
            height
          </label>
          <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              type="number"
              required
            placeholder="Enter your height"
            className="border-gray-500 border-1 p-1 px-2 rounded focus:outline-amber-300 w-100"
          />
        </div>



        <button
          type="submit"
          className="bg-amber-200 text-gray-800 font-bold text-xl p-2 rounded hover:bg-amber-300 transition duration-300"
        >
          Body Mass Index
        </button>

         <button
          type="submit"
          onClick={BMIstate}
          className="bg-amber-200 text-gray-800 font-bold text-xl p-2 rounded hover:bg-amber-300 transition duration-300"
        >
          Body Mass Index State
        </button>
     {/* heigt - 100  */}
  <button
          type="submit"
          onClick={PerfectBMI}
          className="bg-amber-200 text-gray-800 font-bold text-xl p-2 rounded hover:bg-amber-300 transition duration-300"
        >
         Your Perfect Body Mass Index 
        </button>
      </form>
    </div>
  );
}

export default Home;
