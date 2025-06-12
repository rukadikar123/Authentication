import React from "react";
import { useState } from "react";

function Signup() {
const [username,setUsername]=useState("")
const [fullname,setFullname]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")



  return (
    <div className="h-[100vh] w-full bg-slate-300 text-white flex items-center justify-center">
      <div className=" bg-slate-700 max-w-[500px] w-full h-[400px] p-4 border border-black flex flex-col gap-8 items-center justify-center">
        <h1 className="text-2xl font-semibold">Signup</h1>
        
        <form className="flex flex-col w-full gap-6 items-center">
          <input value={fullname} onChange={(e)=>setFullname(e.target.value)} type="text" placeholder="fullname" className="w-full bg-white text-black p-1 outline-none" />
          <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username" className="w-full bg-white text-black p-1 outline-none" />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"  className="w-full bg-white text-black p-1 outline-none" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"   className="w-full bg-white text-black p-1 outline-none"/>
          <button type="submit" className="bg-blue-700 p-2 rounded-lg cursor-pointer hover:bg-blue-600">Signup</button>
          <p>
            Already have an account <span className="text-blue-500">Login </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
