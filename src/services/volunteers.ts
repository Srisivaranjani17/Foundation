import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { VolunteerFormData, VolunteerRecord } from '../types';

export async function submitVolunteerRegistration(
  data: VolunteerFormData
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    console.warn('Supabase not configured. Volunteer data:', data);
    // Simulate success in dev/demo mode
    await new Promise((r) => setTimeout(r, 1000));
    return { success: true };
  }

  const { error } = await supabase.from('volunteers').insert([
    {
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      occupation: data.occupation,
      area_of_interest: data.areaOfInterest,
      availability: data.availability,
      message: data.message,
      status: 'pending',
    },
  ]);

  if (error) {
    console.error('Volunteer submission error:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function getVolunteers(): Promise<VolunteerRecord[]> {
  if (!isSupabaseConfigured) return [];

  const { data, error } = await supabase
    .from('volunteers')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching volunteers:', error);
    return [];
  }

  return data ?? [];
}
