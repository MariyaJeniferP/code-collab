import React, { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (

    <section style={{

      background:"linear-gradient(135deg,#f8fafc,#e2e8f0)",

      minHeight: "100vh",

      display: "flex",

      justifyContent: "center",

      alignItems: "center",

      padding: "20px"

    }}>

      <div style={{

        background: "white",

        padding: "40px",

        borderRadius: "12px",

        width: "100%",

        maxWidth: "450px",

        boxShadow:
          "0 10px 25px rgba(0,0,0,0.1)"

      }}>

        <h1 style={{
          marginBottom: "10px"
        }}>
          Contact Us 💌
        </h1>

        <p style={{
          marginBottom: "20px",
          color: "#555"
        }}>
          We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}

          {/* Email */}
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.message && <p style={errorStyle}>{errors.message}</p>}

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>

        </form>

      </div>

    </section>

  );

}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(90deg,#ec4899,#f472b6)",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "10px"
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginBottom: "10px"
};

export default Contact;