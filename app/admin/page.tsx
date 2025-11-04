'use client';

import { useState, useEffect } from 'react';
import { getProfileData, updateProfileData, uploadImage, ProfileData } from '@/lib/supabase';
import Image from 'next/image';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'ELARA VANCE',
    title: 'Makeup Artist | Entrepreneur',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    background_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&q=80',
    stats: {
      followers: '127K',
      likes: '2.4M',
      posts: '850',
    },
    links: [
      { title: 'MAKEUP STORE', url: 'https://yourstore.com', icon: 'instagram' },
      { title: 'INSPIRATION', url: 'https://instagram.com/yourusername', icon: 'instagram' },
      { title: 'SNAPCHAT', url: 'https://snapchat.com/add/yourusername', icon: 'snapchat' },
      { title: 'WHATSAPP', url: 'https://wa.me/966500000000', icon: 'whatsapp' },
      { title: 'BEAUTY TIPS', url: 'https://tiktok.com/@yourusername', icon: 'tiktok' },
      { title: 'FACEBOOK', url: 'https://facebook.com/yourusername', icon: 'facebook' },
    ],
  });

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadProfileData();
    }
  }, []);

  const loadProfileData = async () => {
    const data = await getProfileData();
    if (data) {
      setProfileData(data);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (في الإنتاج، استخدم نظام أفضل)
    if (password === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      loadProfileData();
    } else {
      setMessage('❌ كلمة السر خاطئة');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'avatar' | 'background') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setMessage('⏳ جاري رفع الصورة...');

    const bucket = type === 'avatar' ? 'avatars' : 'backgrounds';
    const url = await uploadImage(file, bucket);

    if (url) {
      setProfileData(prev => ({
        ...prev,
        [type === 'avatar' ? 'avatar_url' : 'background_url']: url,
      }));
      setMessage('✅ تم رفع الصورة بنجاح!');
    } else {
      setMessage('❌ فشل رفع الصورة');
    }

    setLoading(false);
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage('⏳ جاري الحفظ...');

    try {
      await updateProfileData(profileData);
      setMessage('✅ تم الحفظ بنجاح!');
    } catch (error) {
      setMessage('❌ فشل الحفظ');
      console.error(error);
    }

    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">🔐 لوحة التحكم</h1>
          <p className="text-center text-gray-600 mb-8">Admin Dashboard</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">كلمة السر</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="أدخل كلمة السر"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              دخول
            </button>
          </form>

          {message && (
            <div className="mt-4 p-3 bg-gray-100 rounded-lg text-center text-sm">
              {message}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">🎨 لوحة التحكم</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            تسجيل خروج
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Message */}
        {message && (
          <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl text-center">
            <p className="text-blue-800 font-semibold">{message}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Info */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">📝 المعلومات الأساسية</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">الاسم</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">الوصف</label>
                <input
                  type="text"
                  value={profileData.title}
                  onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">🖼️ الصور</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">صورة الملف الشخصي</label>
                <div className="flex items-center gap-4">
                  <Image
                    src={profileData.avatar_url}
                    alt="Avatar"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'avatar')}
                    className="flex-1 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">صورة الخلفية</label>
                <div className="space-y-2">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src={profileData.background_url}
                      alt="Background"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'background')}
                    className="w-full text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">📊 الإحصائيات</h2>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">المتابعين</label>
                <input
                  type="text"
                  value={profileData.stats.followers}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    stats: { ...profileData.stats, followers: e.target.value }
                  })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-center"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">الإعجابات</label>
                <input
                  type="text"
                  value={profileData.stats.likes}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    stats: { ...profileData.stats, likes: e.target.value }
                  })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-center"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">المنشورات</label>
                <input
                  type="text"
                  value={profileData.stats.posts}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    stats: { ...profileData.stats, posts: e.target.value }
                  })}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-center"
                />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">🔗 الروابط</h2>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {profileData.links.map((link, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-lg p-3">
                  <input
                    type="text"
                    placeholder="العنوان"
                    value={link.title}
                    onChange={(e) => {
                      const newLinks = [...profileData.links];
                      newLinks[index].title = e.target.value;
                      setProfileData({ ...profileData, links: newLinks });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded mb-2 text-sm"
                  />
                  <input
                    type="url"
                    placeholder="الرابط"
                    value={link.url}
                    onChange={(e) => {
                      const newLinks = [...profileData.links];
                      newLinks[index].url = e.target.value;
                      setProfileData({ ...profileData, links: newLinks });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {loading ? '⏳ جاري الحفظ...' : '💾 حفظ التغييرات'}
          </button>
        </div>
      </div>
    </div>
  );
}

