import React from "react";

export default function PageWrapper({ children }) {
  return (
    <div style={{
      maxWidth: "1200px",  // content won't stretch too wide
      margin: "0 auto",     // center horizontally
      padding: "0 20px",    // consistent left-right padding
      boxSizing: "border-box"
    }}>
      {children}
    </div>
  );
}
