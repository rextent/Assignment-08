import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginPage = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-50 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login to Your Account
                </h2>

                <div className="space-y-4">

                    {/* Email */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    {/* Button */}
                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition"
                    >
                        Login
                    </button>

                </div>

                {/* Extra */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Register
                    </a>
                </p>

            </div>
        </section>
    );
};

export default LoginPage;