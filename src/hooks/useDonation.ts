import { useState, useCallback } from 'react';
import type { DonationFormData } from '../types';
import { recordDonation } from '../services/donations';

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  handler: (response: RazorpayResponse) => void;
  prefill: { name: string; email: string; contact: string };
  notes: Record<string, string>;
  theme: { color: string };
  modal: { ondismiss: () => void };
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

export type DonationStatus = 'idle' | 'loading' | 'pending_payment' | 'success' | 'error';

export function useDonation() {
  const [status, setStatus] = useState<DonationStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [activeDonation, setActiveDonation] = useState<{
    data: DonationFormData;
    upiUrl: string;
  } | null>(null);

  const initiateDonation = useCallback(async (data: DonationFormData) => {
    const amount = Number(data.amount);

    if (!amount || amount < 10) {
      setErrorMessage('Minimum donation is ₹10.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const upiId = import.meta.env.VITE_UPI_ID || 'miasei@okaxis';
      const upiName = import.meta.env.VITE_UPI_NAME || 'MIASei Foundation';
      const formattedName = encodeURIComponent(upiName);
      const formattedNote = encodeURIComponent(`Donation from ${data.name}`);
      
      // Build standard UPI URI
      const upiUrl = `upi://pay?pa=${upiId}&pn=${formattedName}&am=${amount}&cu=INR&tn=${formattedNote}`;
      
      setActiveDonation({ data, upiUrl });
      setStatus('pending_payment');
    } catch (err: any) {
      setErrorMessage(err?.message || 'Failed to initiate donation. Please try again.');
      setStatus('error');
    }
  }, []);

  const confirmUPIDonation = useCallback(async (utr: string) => {
    if (!activeDonation) {
      setErrorMessage('No active donation session found.');
      setStatus('error');
      return;
    }

    const cleanUtr = utr.trim();
    if (!cleanUtr || cleanUtr.length < 6) {
      setErrorMessage('Please enter a valid Transaction Ref / UTR number.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const amount = Number(activeDonation.data.amount);

    const result = await recordDonation({
      name: activeDonation.data.name,
      email: activeDonation.data.email,
      phone: activeDonation.data.phone,
      amount,
      message: activeDonation.data.message,
      razorpay_payment_id: cleanUtr, // Reuse this field to store UTR / Transaction ID
      razorpay_order_id: 'UPI_DIRECT',
      status: 'pending', // UPI transfers require manual verification
    });

    if (result.success) {
      setStatus('success');
      setActiveDonation(null);
    } else {
      setErrorMessage(result.error || 'Failed to save donation record. Please contact us.');
      setStatus('error');
    }
  }, [activeDonation]);

  const reset = useCallback(() => {
    setStatus('idle');
    setErrorMessage('');
    setActiveDonation(null);
  }, []);

  return { 
    initiateDonation, 
    confirmUPIDonation, 
    status, 
    errorMessage, 
    upiUrl: activeDonation?.upiUrl || '',
    amount: activeDonation ? Number(activeDonation.data.amount) : 0,
    reset 
  };
}
