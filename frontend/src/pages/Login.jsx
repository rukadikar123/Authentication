import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post(
        `${import.meta.env.VITE_URL}/api/authUser/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] w-full bg-slate-300 text-white flex items-center justify-center">
      <div className=" bg-slate-700 max-w-[500px] w-full h-[370px] p-4 border border-black flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl font-semibold">Login</h1>
        
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-full gap-6 items-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full bg-white text-black p-1 outline-none"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full bg-white text-black p-1 outline-none"
          />
          <button
            type="submit"
            className="bg-blue-700 p-2 rounded-lg cursor-pointer hover:bg-blue-600"
          >
            Login
          </button>
          <p>
            Don't have an account{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              SignUp{" "}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
