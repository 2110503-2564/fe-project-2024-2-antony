"use client";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import userLogIn from "@/libs/userLogIn";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    const data = await userLogIn(email, password);
    if(data){
      router.push("/")
    }
  };
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[200%] max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">
          <span className="text-red-600">Antony</span>{" "}
          <span className="text-gray-900">Massage</span>
        </h1>

        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>

        {errorMsg && (
          <p className="text-red-600 text-sm text-center mb-4">{errorMsg}</p>
        )}

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">Email / Username</label>
          <input
            type="text"
            placeholder="Enter your email or username"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition"
        >
          Login
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-red-600 hover:underline font-medium">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
