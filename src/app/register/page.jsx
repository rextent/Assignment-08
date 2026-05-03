'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = async (data) => {
        const { name, email, photo, password } = data;


        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });
        console.log(data, error);
        if (error) {
            toast.error(error.message || "Signup failed");
            return;
        }
        if (res) {
            toast.success("Signup successful");
            router.push("/login");
        }
    };
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        // console.log(data);
    }


    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-50 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Register Your Account
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>

                    {/* Name */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full outline-none text-sm"
                            {...register("name", { required: "Name Can't empty" })}
                        />
                    </div>
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    {/* Email */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full outline-none text-sm"
                            {...register("email", { required: "Email Can't empty" })}
                        />
                    </div>
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    {/* Photo URL */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <input
                            type="text"
                            placeholder="Enter your Photo URL"
                            className="w-full outline-none text-sm"
                            {...register("photo", {
                                required: "Photo URL Can't empty",
                                validate: (value) =>
                                    value.startsWith("http") || "Must be a valid URL",
                            })}
                        />

                    </div>
                    {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}

                    {/* Password */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full outline-none text-sm"
                            {...register("password", { required: "Password Can't Empty" })}
                        />

                    </div>
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition"
                    >
                        Register
                    </button>

                </form>
                {/* Google Login Button */}
                <button onClick={handleGoogleLogin}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border py-2 rounded-md text-sm hover:bg-gray-50 mt-5"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>

                {/* Extra */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login Now
                    </a>
                </p>

            </div>
        </section>
    );
};

export default RegisterPage;