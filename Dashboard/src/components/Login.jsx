import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate, Link } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { Eye, EyeOff, CircleCheck, CircleX, Mail, Lock } from 'lucide-react';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function handleError(err) {
        toast.error(
            <span className="toast-inline"><CircleX /> {err}</span>,
            {
                icon: false,
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            }
        );
    };

    function handleSuccess(msg) {
        toast.success(
            <span className="toast-inline"><CircleCheck /> {msg}</span>,
            {
                icon: false,
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            }
        );
    };

    async function handleLogin(e) {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            handleSuccess("Login successful");
            setTimeout(() => { navigate("/"); }, 2000);
        } catch (err) {
            // console.error(err);
            if (err.code === "auth/invalid-email") {
                handleError("Invalid email address.");
            } else if (err.code === "auth/missing-password") {
                handleError("Please enter your password.");
            } else if (err.code === "auth/user-not-found") {
                handleError("User not found.");
            } else if (err.code === "auth/wrong-password") {
                handleError("Incorrect password.");
            } else if (err.code === "auth/invalid-credential") {
                handleError("Invalid login credential.");
            } else {
                handleError(err.message);
            }
        }
    };

    async function handleGoogleLogin() {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            handleSuccess("Logged in with Google!");
            setTimeout(() => { navigate("/"); }, 2000);
        } catch (err) {
            // console.error(err);
            handleError("Google login failed");
        }
    };

    return (
        <div className="Login_conatiner p-5 mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6 auth_inner_container border rounded-3">
                    <div className="form_container justify-content-center p-3">

                        <div className="text-center my-3">
                            <img src="/Zerodha_icon.png" alt="Zerodha" className="signup-logo"
                                onClick={() => window.location.href = import.meta.env.VITE_FRONTEND_URL}
                                style={{ width: "60%", cursor: "pointer", objectFit: "contain" }} />
                            <hr />
                        </div>

                        <div className="my-3"><h2>Login Account</h2></div>

                        <div className="justify-content-center">
                            <form className="row g-3 needs-validation" noValidate onSubmit={handleLogin}>

                                <div>
                                    <label htmlFor="email" className="form-label"><Mail className="form_svg" /> Email</label>
                                    <input type="email" id="email" className="form-control" name="email" value={email}
                                        placeholder="Enter your email" onChange={e => setEmail(e.target.value)} autoComplete="email" />
                                </div>

                                <div style={{ position: "relative" }}>
                                    <label htmlFor="password" className="form-label"><Lock className="form_svg" /> Password</label>
                                    <input type={showPassword ? "text" : "password"} id="password" className="form-control" name="password" value={password}
                                        placeholder="Enter your password" onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
                                    {/*Eye toggle button */}
                                    <span onClick={() => setShowPassword(!showPassword)}
                                        style={{
                                            position: "absolute", right: "20px", top: "70%",
                                            transform: "translateY(-50%)", cursor: "pointer", color: "#555"
                                        }}>
                                        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                    </span>
                                </div>

                                <button className="form_sumbit" type="submit">Login</button>

                                <div>
                                    Don't have an account? <Link className="acc-auth-link" to={"/signup"}>Signup</Link>
                                </div>

                            </form>
                        </div>

                        <div className="text-center my-3 d-flex align-items-center">
                            <div className="flex-grow-1 border-top"></div>
                            <span className="mx-2 text-muted fw-semibold">OR</span>
                            <div className="flex-grow-1 border-top"></div>
                        </div>

                        <button onClick={handleGoogleLogin} className="google-btn w-100 d-flex align-items-center justify-content-center gap-2">
                            <img src="/google_icon.png" alt="Google" /> Continue with Google
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}