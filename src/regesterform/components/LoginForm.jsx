import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../utils/translations";

export default function LoginForm() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const updateBackgroundImage = () => {
      const width = window.innerWidth;
      let imagePath;

      if (width <= 480) {
        imagePath = "/images/hero-bg-mobile.jpg";
      } else if (width <= 768) {
        imagePath = "/images/hero-bg-tablet.jpg";
      } else {
        imagePath = "/images/hero-bg.png";
      }

      setBackgroundImage(imagePath);
    };

    updateBackgroundImage();
    window.addEventListener("resize", updateBackgroundImage);

    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* LEFT SIDE - Form */}
      <div
        style={{
          flex: 1,
          padding: "60px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "500px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#333",
          }}
        >
          Welcome back
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "40px",
            fontSize: "16px",
          }}
        >
          Please sign in to your account
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              {t.email} <span style={{ color: "#ff3b30" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "2px solid #e1e5e9",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.3s",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              Password <span style={{ color: "#ff3b30" }}>*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "2px solid #e1e5e9",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.3s",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#ff3b30",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "10px",
              transition: "background-color 0.3s",
            }}
          >
            {t.login}
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginTop: "20px",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#ff3b30",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE - Branding */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#f8f9fa",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#ffffff",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          term<b style={{ color: "#ff3b30" }}>bi</b>
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "40px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          Restaurant Management System
        </p>
      </div>
    </div>
  );
}
