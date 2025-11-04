import React from 'react';

interface SocialButtonProps {
  name: string;
  icon: React.ReactNode;
  url: string;
  colorClass: string;
}

export default function SocialButton({ name, icon, url, colorClass }: SocialButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white shadow-lg hover:scale-110 hover:rotate-6 transform transition-all duration-300 hover:shadow-xl`}
      aria-label={name}
      title={name}
    >
      {icon}
    </a>
  );
}

