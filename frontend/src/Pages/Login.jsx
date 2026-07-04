import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {

        if (!formData.email || !formData.password) {
            alert("Please Enter Email & Password");
            return;
        }

        try {

            const res = await axios.post(
                "https://movie-ticket-backend-5t6p.onrender.com/api/auth/login",
                {
                    email: formData.email,
                    password: formData.password,
                }
            );

            alert(res.data.message || "Login Successful");

            // Future use (JWT Token)
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            }

            navigate("/");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Invalid Email or Password"
            );

        }
    };

    return (
        <div className="login-container">

            <div className="login-card">

                <h2>🎬 Login</h2>

                <input
                    type="email"
                    name="email"
                    className="form-control mb-3"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    className="form-control mb-4"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button
                    className="btn-login"
                    onClick={handleLogin}
                >
                    Login
                </button>

                <div className="link-text">
                    Don't have an account?
                    <br />

                    <Link to="/register">
                        Register
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Login;