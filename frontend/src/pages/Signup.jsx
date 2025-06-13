import React from "react";
import { useRef } from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frontendImage,setFrontendImage]=useState("https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png")
  const [backendImage,setBackendImage]=useState(null)

const navigate=useNavigate()

const handleImage=(e)=>{
    let file=e.target.files[0]
    setBackendImage(file)
    let image=URL.createObjectURL(file)
    setFrontendImage(image)
    
}

let imageRef=useRef(null)
  const handleSignup=async(e)=>{
    e.preventDefault();
    let formData=new FormData()

    formData.append("fullname",fullname)
    formData.append("username",username)
    formData.append("email",email)
    formData.append("password",password)

    if(backendImage){
      formData.append("profilepic",backendImage)
    }

    try {
        let response=await axios.post(`${import.meta.env.VITE_URL}/api/authUser/signup`,formData,{withCredentials:true},{
          headers:{"Content-Type":"multipart/form-data"}
        })
    console.log(response);
    
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <div className="h-[100vh] w-full bg-slate-300 text-white flex items-center justify-center">
      <div className=" bg-slate-700 max-w-[500px] w-full h-[570px] p-4 border border-black flex flex-col gap-8 items-center justify-center">
        <h1 className="text-2xl font-semibold">Signup</h1>
        <div
          onClick={()=>imageRef.current.click()}
          className="h-[120px] w-[120px] rounded-full border-2 overflow-hidden opacity-80 hover:opacity-50"
        >
          <img
            src={frontendImage}
            alt=""
            className="h-full w-full"
          />
        </div>
        <form onSubmit={handleSignup} className="flex flex-col w-full gap-6 items-center">
          <input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            placeholder="Fullname"
            className="w-full bg-white text-black p-1 outline-none"
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            className="w-full bg-white text-black p-1 outline-none"
          />
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
          <input type="file" hidden accept="image/*" ref={imageRef} onChange={handleImage}/>
          <button
          onClick={handleSignup}
            type="submit"
            className="bg-blue-700 p-2 rounded-lg cursor-pointer hover:bg-blue-600"
          >
            Signup
          </button>
          <p>
            Already have an account{" "}
            <span className="text-blue-500 cursor-pointer" onClick={()=>navigate('/login')}>Login </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
