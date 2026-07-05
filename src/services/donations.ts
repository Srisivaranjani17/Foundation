import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { DonationRecord } from '../types';

export async function recordDonation(
  data: Omit<DonationRecord, 'id' | 'created_at'>
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    console.warn('Supabase not configured. Donation data:', data);
    await new Promise((r) => setTimeout(r, 800));
    return { success: true };
  }

  const { error } = await supabase.from('donations').insert([data]);

  if (error) {
    console.error('Donation record error:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
