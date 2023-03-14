import React, { useState } from "react";
import axios from "axios";
// import { Redirect } from 'react-router-dom'
import "./login.css";
import Navbar from "../Navbar";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        formData
      );
      console.log(response.data);
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      //   setRedirect(true);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  //   if (redirect) {
  //     return redirect('/create')

  //     }

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-200">
      <h1 className="text-2xl font-medium text-gray-700">Login</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm mt-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-gray-400 w-full rounded-lg focus:outline-none focus:border-indigo-500"
            required
            />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="password" className="text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 border border-gray-400 w-full rounded-lg focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Login
        </button>
      </form>
      {error && <div className="mt-6 text-center text-red-500">{error}</div>}
      {user && (
        <div className="mt-6 text-center">
          <h3 className="text-gray-700 font-medium">User Details</h3>
          <p>
            <strong className="text-gray-700">Name:</strong> {user.name}
          </p>
          <p>
            <strong className="text-gray-700">Email:</strong> {user.email}
          </p>
        </div>
      )}
    </div>
      </>
  );
}

export default Login;
