import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { ContactFormData } from '../types';

export async function submitContactMessage(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    console.warn('Supabase not configured. Contact data:', data);
    await new Promise((r) => setTimeout(r, 800));
    return { success: true };
  }

  const { error } = await supabase.from('contact_messages').insert([
    {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      status: 'new',
    },
  ]);

  if (error) {
    console.error('Contact submission error:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
