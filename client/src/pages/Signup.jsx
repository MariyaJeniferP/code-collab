import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSignup = async () => {
  try {
    if(!name || !email || !password){
      setError("All fields are required");
      return;
    }

    const response = await fetch("https://code-collab-server-78yy.onrender.com/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    if(!response.ok){
      throw new Error("Server error");
    }

    const data = await response.json();

    alert(data.message);
    navigate("/signin");

  } catch (err) {
    console.error(err);
    setError("Server not responding. Try again.");
  }
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