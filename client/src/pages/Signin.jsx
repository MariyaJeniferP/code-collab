import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const handleLogin = async () => {
  try {
    if(!email || !password){
      setError("All fields are required");
      return;
    }

    const response = await fetch("https://code-collab-server-78yy.onrender.com/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if(!response.ok){
      throw new Error("Server error");
    }

    const data = await response.json();

    if(data.success){
      localStorage.setItem("userName", data.name);
      navigate("/dashboard");
    } else {
      setError(data.message);
    }

  } catch (err) {
    console.error(err);
    setError("Server not responding. Try again in few seconds.");
  }
};
  return (

    <div className="container">

      <div className="card">

        <h2>Login</h2>

        {error && <p style={{color:"red"}}>{error}</p>}

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="button" onClick={() => handleLogin()}>
          Login
        </button>

      </div>

    </div>

  );

}

export default Signin;