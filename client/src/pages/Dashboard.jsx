import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){

  const [room,setRoom] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{

    const user = localStorage.getItem("user");

    if(!user){
      navigate("/signin");
    }

  },[]);

  const createRoom = () => {

    if(!room){
      alert("Enter Room ID");
      return;
    }

    navigate("/editor?room="+room);

  };

  const generateRoom = () => {

    const randomRoom = Math.random().toString(36).substring(2,8);

    setRoom(randomRoom);

  };

  return(

    <div className="container">

      <div className="card">

        <h2>Code Collaboration</h2>

        <p>Create or Join a Room</p>

        <input
        placeholder="Enter Room ID"
        value={room}
        onChange={(e)=>setRoom(e.target.value)}
        />

        <button onClick={createRoom}>
        Join Room
        </button>

        <button onClick={generateRoom}>
        Generate Room ID
        </button>

      </div>

    </div>

  );

}

export default Dashboard;