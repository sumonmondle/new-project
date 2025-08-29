"use client";
import React, {  useState } from "react";
import axios from "axios";
import Dashboard from "./component/Dashboard/Dashboard";

export default function AdminLogin() {

    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [isVerified, setIsVerified] = useState(false); // ✅ NEW

    const requestLogin = async () => {
        try {
            const res = await axios.post("https://backend-wine-chi-49.vercel.app/admin/request-login", { email });
            setMessage(res.data.message);
            setOtpSent(true);
        } catch (err) {
            setMessage(err?.response?.data?.message || "Request failed");
        }
    };

    const verifyOtp = async () => {
        try {
            const res = await axios.post("https://backend-wine-chi-49.vercel.app/admin/verify-otp", { email, otp });
            console.log(res.data)
            setMessage("✅ Login Successful");
            setIsVerified(true); // ✅ show dashboard
        } catch (err) {
            setMessage("❌ " + (err?.response?.data?.message || "Verification failed"));
        }
    };

    if (!isVerified) {
        return <Dashboard />; // ✅ Show dashboard if verified
    }

 





    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-center">Admin Login</h2>
                <div className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); }}
                        className="w-full px-4 py-2 bg-white border rounded-md"
                    />

                    {otpSent ? (
                        <>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md"
                            />
                            <button
                                onClick={verifyOtp}
                                className="w-full py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                            >
                                Verify OTP
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={requestLogin}
                            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                            Send OTP
                        </button>
                    )}
                    {message && <p className="mt-4 text-sm text-center text-gray-600">{message}</p>}
                </div>
            </div>
        </div>
    );
}
