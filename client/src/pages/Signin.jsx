import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleLogin = async () => {
    console.log("Function started");
    // FORM VALIDATION
    if(!email || !password){
      setError("All fields are required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
      setError("Enter a valid email address");
      return;
    }

    setError("");

    const response = await fetch("https://code-collab-server-78yy.onrender.com/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    console.log("Response:", data);

    if(data.success){
      console.log("Navigating now...");
      localStorage.setItem("userName", data.name);

      navigate("/dashboard");

    }else{
      setError(data.message);
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