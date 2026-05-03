'use client'

import { authClient } from '@/lib/auth-client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const LoginPage = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async (data) => {
        const callbackUrl = searchParams.get("callbackUrl") || "/";

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            redirect: false,
        });
        if (error) {
            // console.log("Login error:", error);
            toast.error("❌ Login failed");
            return;
        }
        toast.success("✅ Login successful");

        router.push(callbackUrl);

        // console.log("Login success:", res);

        // 🔥 IMPORTANT: force reload / redirect
        // window.location.href = "/";
        // window.location.href = '/';

    };
    const handleGoogleLogin = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
            });

            toast.success("Redirecting to Google...");
        } catch (err) {
            toast.error("Google login failed");
        }


        // console.log(data);
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-50 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg animate__animated animate__fadeInUp">

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login to Your Account
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>

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
                        Login
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