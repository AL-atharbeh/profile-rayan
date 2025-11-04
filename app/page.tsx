'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProfileData, ProfileData } from '@/lib/supabase';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    // Load profile data from Supabase
    const loadData = async () => {
      const data = await getProfileData();
      if (data) {
        setProfileData(data);
      }
      // Loading animation
      setTimeout(() => setLoading(false), 2000);
    };

    loadData();

    // Parallax effect
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Icon mapping for backward compatibility
  const getIconUrl = (icon: string) => {
    const iconMap: Record<string, string> = {
      instagram: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
      tiktok: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg',
      snapchat: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg',
      whatsapp: '/bouticat0.png',
      x: 'https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg',
    };
    return iconMap[icon.toLowerCase()] || iconMap.instagram;
  };

  // Use data from Supabase or fallback to defaults
  const displayName = profileData?.name || 'ريان دشتي';
  const displayTitle = profileData?.title || 'ممثل قانوني || ناصر ظافر العجمي';
  const displayAvatar = profileData?.avatar_url || '/profile.jpeg';
  const displayBackground = profileData?.background_url || '/back.jpeg';
  const displayStats = profileData?.stats || {
    followers: '132K',
    likes: '2.4M',
    posts: '370',
  };
  const appLinks = profileData?.links?.map(link => ({
    title: link.title,
    url: link.url,
    iconUrl: getIconUrl(link.icon),
  })) || [
    { title: 'INSTAGRAM', url: 'https://www.instagram.com/rn_dashti?igsh=MTFjb3Z2bmpoZjZyNw==', iconUrl: getIconUrl('instagram') },
    { title: 'SNAPCHAT', url: 'https://www.snapchat.com/add/rn.08', iconUrl: getIconUrl('snapchat') },
    { title: 'BOUTIQAAT', url: 'https://boutiqaat.go.link/74JGJ', iconUrl: getIconUrl('whatsapp') },
  { title: 'TIKTOK', url: 'https://www.tiktok.com/@itsrayandashti?_t=ZS-8x3dL1yTdf5&_r=1&fbclid=PARlRTSAN2yYZleHRuA2FlbQIxMAABp0RdincmaJAaWmTZjMX02Hqsa-qjkKJcpg0IVupyadouR7fVKJr8Me1O0Vgs_aem_X3CKz2STmI4QiCE8z55h5A', iconUrl: getIconUrl('tiktok') },
    { title: 'X', url: 'https://x.com/itsrayandashti?s=21', iconUrl: getIconUrl('x') },
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ريان دشتي - Link in Bio',
          text: 'Check out my links!',
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Copy link to clipboard
      navigator.clipboard.writeText(window.location.href);
      setShowShare(true);
      setTimeout(() => setShowShare(false), 3500);
    }
  };

  if (loading) {
  return (
      <div className="fixed inset-0 relative overflow-hidden z-50">
        {/* Background matching main page */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${displayBackground}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-red-900/25 mix-blend-multiply"></div>
        </div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle-enhanced"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
          {/* Logo/Avatar - Real Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36">
              {/* Animated sparkles around avatar */}
              <div className="absolute -inset-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-2xl animate-float">✨</div>
                <div className="absolute bottom-0 right-0 text-xl animate-float animation-delay-400">💫</div>
                <div className="absolute top-1/2 left-0 text-xl animate-float animation-delay-200">⭐</div>
                <div className="absolute top-0 right-0 text-lg animate-float animation-delay-600">✨</div>
              </div>
              
              {/* Main avatar with real image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/70 shadow-2xl animate-pulse-slow">
                <img 
                  src={displayAvatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5 tracking-wide drop-shadow-2xl animate-fade-in text-center" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", lineHeight: '1.4' }}>
            {displayName}
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-sm sm:text-base tracking-widest drop-shadow-lg mb-8 animate-fade-in text-center mt-2 sm:mt-3" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", lineHeight: '1.6' }}>
            {displayTitle}
          </p>

          {/* Loading bar */}
          <div className="w-full max-w-xs sm:max-w-sm mb-6">
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="h-full bg-gradient-to-r from-white via-pink-200 to-white rounded-full animate-loading-bar"></div>
            </div>
          </div>

          {/* Loading dots */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce animation-delay-400"></div>
          </div>

          {/* Loading text */}
          <p className="text-white/70 text-xs sm:text-sm mt-4 animate-pulse">
            Preparing your experience...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle-enhanced"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover md:bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url('${displayBackground}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            width: '100%',
            height: '100%',
            transform: `scale(${1 + scrollY * 0.0003})`,
            transformOrigin: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply"></div>
      </div>

      {/* Share Button - Mobile Friendly */}
      <button
        onClick={handleShare}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 w-14 h-14 md:w-12 md:h-12 rounded-full bg-white/30 backdrop-blur-xl border-2 border-white/60 flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl"
        aria-label="Share"
      >
        <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>

      {/* Share Notification - Enhanced Toast */}
      {showShare && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-toast-in">
          <div className="relative">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur-sm opacity-75"></div>
            
            {/* Toast Content */}
            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-2xl border-2 border-white/60 min-w-[280px]">
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                {/* Text */}
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 mb-0.5">Link Copied!</p>
                  <p className="text-xs text-gray-600">Ready to share with others</p>
                </div>
                
                {/* Close Button */}
                <button 
                  onClick={() => setShowShare(false)}
                  className="flex-shrink-0 w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - بدون إطار هاتف */}
      <main className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="relative flex flex-col items-center justify-center py-12 px-6">
            
            {/* Profile Image - دائري مثل الصورة */}
            <div className="mb-6 animate-fade-in-up">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl backdrop-blur-sm gradient-border-avatar">
                  <Image
                    src={displayAvatar}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Profile Name & Bio */}
            <div className="text-center mb-6 animate-fade-in-up animation-delay-200 space-y-3 sm:space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-2xl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", lineHeight: '1.4' }}>
                {displayName}
              </h1>
              <p className="text-white/90 text-base md:text-lg tracking-widest drop-shadow-lg" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", lineHeight: '1.6' }}>
                {displayTitle}
              </p>
            </div>

            {/* Stats/Counters - Mobile Optimized */}
            <div className="w-full mb-8 grid grid-cols-3 gap-2 sm:gap-4 px-2 sm:px-0">
              <div className="text-center bg-white/15 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in-up animation-delay-400 gradient-border-stats">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg">{displayStats.followers}</div>
                <div className="text-[10px] sm:text-xs text-white/90 uppercase tracking-wider font-semibold">Followers</div>
              </div>
              <div className="text-center bg-white/15 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in-up animation-delay-500 gradient-border-stats">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg">{displayStats.likes}</div>
                <div className="text-[10px] sm:text-xs text-white/90 uppercase tracking-wider font-semibold">Likes</div>
              </div>
              <div className="text-center bg-white/15 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in-up animation-delay-600 gradient-border-stats">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg">{displayStats.posts}</div>
                <div className="text-[10px] sm:text-xs text-white/90 uppercase tracking-wider font-semibold">Posts</div>
              </div>
            </div>

            {/* Main App Links */}
            <div className="w-full space-y-4 mb-8">
              {appLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
            target="_blank"
            rel="noopener noreferrer"
                  className="group block animate-fade-in-up"
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <div className="relative overflow-hidden rounded-full bg-white/10 backdrop-blur-xl px-8 py-5 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 gradient-border">
                    <div className="flex items-center justify-center gap-4">
                      {/* Icon with background */}
                      <div className="relative w-10 h-10 flex-shrink-0 rounded-full bg-white/90 flex items-center justify-center p-2 shadow-lg">
                        <Image 
                          src={link.iconUrl}
                          alt={link.title}
                          width={32}
                          height={32}
                          className="object-contain"
                          style={{ filter: 'none' }}
                        />
                      </div>
                      {/* Text */}
                      <span className="font-bold text-white tracking-wider text-base uppercase drop-shadow-2xl">
                        {link.title}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="text-center space-y-3">
              <p className="text-white/80 text-xs tracking-wide drop-shadow-lg">
                Actor
              </p>
              
              {/* Credit */}
              <div className="flex items-center justify-center gap-2 text-white/50 text-[10px] tracking-wider">
                <span>Made with</span>
                <span>by</span>
                <span className="font-semibold text-white/70">@shfcod</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
