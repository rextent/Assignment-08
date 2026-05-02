"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaImage, FaLock } from "react-icons/fa";

export default function RegisterPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        photo: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 👉 এখানে তুমি API/Firebase call করতে পারো
        console.log(form);
        alert("Registered successfully!");
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-50 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Create Your Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <FaUser className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <FaEnvelope className="text-gray-400 mr-2" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <FaImage className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            required
                            value={form.photo}
                            onChange={handleChange}
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <FaLock className="text-gray-400 mr-2" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={form.password}
                            onChange={handleChange}
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition"
                    >
                        Register
                    </button>

                </form>

                {/* Footer */}
                <p className="text-xs text-center text-gray-500 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login
                    </a>
                </p>

            </div>
        </section>
    );
}