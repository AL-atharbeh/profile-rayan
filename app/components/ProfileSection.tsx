import React from 'react';

interface ProfileSectionProps {
  name: string;
  bio: string;
  avatarEmoji?: string;
  isOnline?: boolean;
}

export default function ProfileSection({ 
  name, 
  bio, 
  avatarEmoji = '👤', 
  isOnline = true 
}: ProfileSectionProps) {
  return (
    <div className="text-center mb-8">
      <div className="relative inline-block mb-4">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full p-1 animate-pulse-slow">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-4xl">
            {avatarEmoji}
          </div>
        </div>
        {isOnline && (
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-4 border-white">
            <div className="w-full h-full rounded-full bg-green-500 animate-ping opacity-75"></div>
          </div>
        )}
      </div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
        {name}
      </h1>
      <p className="text-gray-600 text-sm">
        {bio}
      </p>
    </div>
  );
}

