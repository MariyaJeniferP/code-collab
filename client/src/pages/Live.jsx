import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://code-collab-server-78yy.onrender.com");

function Live() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    // Listen for live data
    socket.on("live-data", (data) => {

      console.log("Live Data:", data);

      setUsers(data);

    });

    // Cleanup
    return () => {
      socket.off("live-data");
    };

  }, []);

  // Count unique rooms
  const uniqueRooms =
    new Set(users.map(user => user.roomId)).size;

  return (

    <section style={{

      padding: "60px 40px",

      minHeight: "100vh",

      background:
        "linear-gradient(135deg,#eff6ff,#dbeafe)"

    }}>

      {/* Heading */}

      <h1 style={{

        textAlign: "center",

        marginBottom: "30px"

      }}>
        🔴 Live Dashboard
      </h1>

      {/* Stats Cards */}

      <div style={{

        display: "flex",

        justifyContent: "center",

        gap: "30px",

        marginBottom: "40px",

        flexWrap: "wrap"

      }}>

        {/* Active Users */}

        <div style={smallCardStyle}>

          <h2>{users.length}</h2>

          <p>Active Users</p>

        </div>

        {/* Active Rooms */}

        <div style={smallCardStyle}>

          <h2>{uniqueRooms}</h2>

          <p>Active Rooms</p>

        </div>

      </div>

      {/* Users List */}

      <div style={{

        maxWidth: "700px",

        margin: "0 auto",

        background: "white",

        padding: "30px",

        borderRadius: "12px",

        boxShadow:
          "0 5px 15px rgba(0,0,0,0.1)"

      }}>

        <h2>👥 Active Users</h2>

        {users.length === 0 ? (

          <p>No users online</p>

        ) : (

          users.map((user, index) => (

            <p
              key={index}
              style={userItemStyle}
            >

              🟢 {user.name}
              {" — "}
              Room name : {user.roomId}

            </p>

          ))

        )}

      </div>

    </section>

  );

}

/* Small Stats Card Style */

const smallCardStyle = {

  background: "white",

  padding: "20px 30px",

  borderRadius: "12px",

  textAlign: "center",

  boxShadow:
    "0 5px 15px rgba(0,0,0,0.1)"

};

/* User Row Style */

const userItemStyle = {

  marginTop: "10px",

  padding: "10px",

  borderBottom:
    "1px solid #e5e7eb"

};

export default Live;