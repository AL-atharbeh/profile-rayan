import React from 'react';

interface LinkCardProps {
  title: string;
  url: string;
  icon?: string;
  subtitle?: string;
}

export default function LinkCard({ title, url, icon, subtitle }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 p-4 border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon && (
              <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300">
                {icon}
              </span>
            )}
            <div>
              <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 block">
                {title}
              </span>
              {subtitle && (
                <span className="text-xs text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                  {subtitle}
                </span>
              )}
            </div>
          </div>
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

