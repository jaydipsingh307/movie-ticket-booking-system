import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async () => {

        if (
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            alert("Please fill all fields");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        }

        try {

            const res = await axios.post(
                "http://localhost:5001/api/auth/register",
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }
            );

            alert(res.data.message || "Registration Successful");

            navigate("/login");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }
    };

    return (
        <div className="login-container">

            <div className="login-card">

                <h2>🎬 Register</h2>

                <input
                    type="text"
                    name="name"
                    className="form-control mb-3"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="confirmPassword"
                    className="form-control mb-4"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                <button
                    className="btn-login"
                    onClick={handleRegister}
                >
                    Register
                </button>

                <div className="link-text">
                    Already have an account?
                    <br />

                    <Link to="/login">
                        Login
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Register;