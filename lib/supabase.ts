import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase credentials not found. Please check .env.local file.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

// Types for our data
export interface ProfileData {
  id?: string;
  name: string;
  title: string;
  avatar_url: string;
  background_url: string;
  stats: {
    followers: string;
    likes: string;
    posts: string;
  };
  links: Array<{
    title: string;
    url: string;
    icon: string;
  }>;
  created_at?: string;
  updated_at?: string;
}

// Get profile data
export async function getProfileData(): Promise<ProfileData | null> {
  const { data, error } = await supabase
    .from('profile')
    .select('*')
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }

  return data;
}

// Update profile data
export async function updateProfileData(profileData: Partial<ProfileData>) {
  const { data, error } = await supabase
    .from('profile')
    .upsert({
      id: '1', // Fixed ID for single profile
      ...profileData,
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    console.error('Error updating profile:', error);
    throw error;
  }

  return data;
}

// Upload image to storage
export async function uploadImage(file: File, bucket: string = 'avatars'): Promise<string | null> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (uploadError) {
    console.error('Error uploading image:', uploadError);
    return null;
  }

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return data.publicUrl;
}

