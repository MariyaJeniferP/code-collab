import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSignup = async () => {

    // VALIDATION
    if(!name || !email || !password){
      setError("All fields are required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
      setError("Enter a valid email");
      return;
    }

    if(password.length < 6){
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    const response = await fetch("http://localhost:8002/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await response.json();

    alert(data.message);

    navigate("/signin");

  };

  return(

    <div className="container">

      <div className="card">

        <h2>Create Account</h2>

        {error && <p style={{color:"red"}}>{error}</p>}

        <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

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

        <button onClick={handleSignup}>
        Register
        </button>

      </div>

    </div>

  );

}

export default Signup;