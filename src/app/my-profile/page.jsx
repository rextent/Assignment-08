'use client'

import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { UpdateUserModal } from '../components/UpdateUserModal';



const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // ✅ Safe Image
  const getSafeImage = (url) => {
    try {
      new URL(url);
      return url;
    } catch {
      return "/default-user.png";
    }
  };

  // ⏳ Loading state
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-50 px-4 py-10">
      <div className="max-w-md mx-auto">

        <Card className="p-6 shadow-lg rounded-xl animate__animated animate__fadeInUp">

          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">

            <Image
              src={getSafeImage(user?.image)}
              width={90}
              height={90}
              alt="user"
              className="rounded-full border"
            />

            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-800">
              {user?.name || "User Name"}
            </h2>

            {/* Email */}
            <p className="text-sm text-gray-500">
              {user?.email || "No Email"}
            </p>

            {/* Status */}
            <span className={`text-xs px-2 py-1 rounded-full ${
              user?.emailVerified
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
            }`}>
              {user?.emailVerified ? "Verified" : "Not Verified"}
            </span>
            <UpdateUserModal></UpdateUserModal>

          </div>

          {/* Divider */}
          <div className="my-6 border-t"></div>

          {/* Info */}
          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-gray-500">Full Name</span>
              <span className="font-medium text-gray-800">
                {user?.name}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Email</span>
              <span className="font-medium text-gray-800">
                {user?.email}
              </span>
            </div>

          </div>

        </Card>

      </div>
    </section>
  );
};

export default MyProfilePage;