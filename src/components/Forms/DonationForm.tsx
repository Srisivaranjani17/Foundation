import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaCircleExclamation, FaHeart } from 'react-icons/fa6';
import { Button } from '../UI/Button';
import { useDonation } from '../../hooks/useDonation';
import { presetAmounts, paymentMethods } from '../../content/donate';
import { formatCurrency } from '../../utils/formatters';
import type { DonationFormData } from '../../types';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  amount: z.union([z.string(), z.number()]).refine(
    (v) => Number(v) >= 10,
    { message: 'Minimum donation is ₹10' }
  ),
  message: z.string().optional(),
});

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [utr, setUtr] = useState('');
  const [utrError, setUtrError] = useState('');
  
  const { 
    initiateDonation, 
    confirmUPIDonation, 
    status, 
    errorMessage, 
    upiUrl, 
    amount, 
    reset 
  } = useDonation();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset: resetForm,
    formState: { errors },
  } = useForm<DonationFormData>({
    resolver: zodResolver(schema),
  });

  const currentAmount = watch('amount');

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setValue('amount', amount, { shouldValidate: true });
  };

  const onSubmit = async (data: DonationFormData) => {
    await initiateDonation(data);
  };

  const handleConfirmPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUtr = utr.trim();
    if (cleanUtr && cleanUtr.length < 6) {
      setUtrError('The UTR/Transaction ID seems too short.');
      return;
    }
    setUtrError('');
    await confirmUPIDonation(cleanUtr || 'Not Provided');
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-24 h-24 rounded-full bg-[#e8f5ea] flex items-center justify-center">
          <FaHeart size={44} className="text-[#3FA34D]" fill="#3FA34D" />
        </div>
        <h3 className="font-heading font-bold text-[#1F2937] text-2xl">
          Thank You for Your Support! 🙏
        </h3>
        <p className="text-[#4B5563] max-w-md leading-relaxed">
          Your donation details have been submitted. Our admin team will verify the UPI transfer{utr.trim() ? ` (UTR: ${utr})` : ''} against our bank statement.
        </p>
        <p className="text-[#6B7280] text-xs max-w-sm">
          A receipt will be sent to your email address once confirmed. Every rupee directly feeds hungry families today.
        </p>
        <div className="flex gap-3 mt-4">
          <Button variant="primary" onClick={() => { reset(); resetForm(); setSelectedAmount(null); setUtr(''); }}>
            Donate Again
          </Button>
          <Button as="a" href="/volunteer" variant="secondary">
            Also Volunteer?
          </Button>
        </div>
      </div>
    );
  }

  if (upiUrl) {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiUrl)}`;
    const upiId = import.meta.env.VITE_UPI_ID || 'miasei@okaxis';

    return (
      <div className="flex flex-col gap-6 py-4" aria-label="UPI Payment instructions">
        <div className="text-center">
          <h3 className="font-heading font-bold text-[#1F2937] text-xl mb-1">
            Scan & Pay via UPI
          </h3>
          <p className="text-[#4B5563] text-sm">
            Please transfer exactly <span className="font-bold text-[#3FA34D]">{formatCurrency(amount)}</span> to the foundation.
          </p>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm gap-4">
          <img 
            src={qrCodeUrl} 
            alt={`UPI Payment QR Code for ${formatCurrency(amount)}`} 
            className="w-48 h-48 border border-gray-200 p-2 rounded-xl"
          />
          <div className="text-center">
            <p className="text-xs text-[#9CA3AF] mb-1">UPI ID</p>
            <p className="text-sm font-mono font-semibold text-[#1F2937] select-all bg-gray-50 px-3 py-1 rounded-md border border-gray-200 inline-block">
              {upiId}
            </p>
          </div>
        </div>

        {/* Mobile Redirect Link */}
        <div className="block sm:hidden text-center">
          <a
            href={upiUrl}
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-[#3FA34D] hover:bg-[#32823c] rounded-xl transition-colors duration-200 gap-2 shadow-sm"
          >
            <span>📱</span> Pay directly with UPI Apps
          </a>
          <p className="text-xs text-[#9CA3AF] mt-2">
            Opens Google Pay, PhonePe, Paytm, or BHIM directly
          </p>
        </div>

        {/* Verification Form */}
        <form onSubmit={handleConfirmPayment} className="border-t border-gray-100 pt-6">
          <div className="mb-4">
            <label htmlFor="don-utr" className="form-label mb-1">
              Enter 12-Digit UPI Transaction ID / UTR (Optional)
            </label>
            <input
              id="don-utr"
              type="text"
              pattern="[0-9]*"
              placeholder="e.g. 3045XXXXXXXX or Ref No."
              value={utr}
              onChange={(e) => {
                setUtr(e.target.value);
                setUtrError('');
              }}
              className={`form-input font-mono ${utrError || errorMessage ? 'error' : ''}`}
            />
            {utrError && <p className="form-error mt-1">{utrError}</p>}
            {errorMessage && <p className="form-error mt-1">{errorMessage}</p>}
            <p className="text-[11px] text-[#6B7280] mt-1.5 leading-relaxed">
              💡 <strong>Where to find?</strong> Look at your payment receipt in GPay/PhonePe/Paytm. Copy the 12-digit number listed as <strong>UTR</strong>, <strong>UPI Ref No</strong>, or <strong>Transaction ID</strong>.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={reset}
              className="px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-[#4B5563] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <Button
              type="submit"
              variant="donate"
              className="flex-1"
              loading={status === 'loading'}
            >
              {status === 'loading' ? 'Verifying...' : 'Confirm Donation'}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Donation form">
      {status === 'error' && (
        <div className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-red-50 border border-red-200">
          <FaCircleExclamation size={18} className="text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-sm">
            {errorMessage || 'Something went wrong. Please try again.'}
          </p>
        </div>
      )}

      {/* Preset Amounts */}
      <div className="mb-6">
        <p className="form-label mb-3">Select Amount</p>
        <div className="grid grid-cols-3 gap-3">
          {presetAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handlePresetClick(amount)}
              className={`
                py-2.5 px-3 rounded-xl border-2 font-heading font-semibold text-sm
                transition-all duration-200
                ${selectedAmount === amount
                  ? 'border-[#F59E2A] bg-[#fef3e2] text-[#F59E2A]'
                  : 'border-gray-200 text-[#4B5563] hover:border-[#F59E2A] hover:text-[#F59E2A]'
                }
              `}
            >
              {formatCurrency(amount)}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div className="mb-6">
        <label htmlFor="don-amount" className="form-label">
          Or Enter Custom Amount <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5563] font-semibold">₹</span>
          <input
            id="don-amount"
            type="number"
            min="10"
            placeholder="Enter amount"
            className={`form-input ${errors.amount ? 'error' : ''}`}
            style={{ paddingLeft: '2.5rem' }}
            value={currentAmount || ''}
            {...register('amount', {
              onChange: () => {
                setSelectedAmount(null);
              }
            })}
          />
        </div>
        {errors.amount && (
          <p className="form-error">{errors.amount.message as string}</p>
        )}
        {currentAmount && Number(currentAmount) > 0 && (
          <p className="text-xs text-[#3FA34D] mt-1 font-medium">
            ✓ Your donation of {formatCurrency(Number(currentAmount))} will make a difference!
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div>
          <label htmlFor="don-name" className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="don-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={`form-input ${errors.name ? 'error' : ''}`}
            {...register('name')}
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="don-email" className="form-label">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="don-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={`form-input ${errors.email ? 'error' : ''}`}
            {...register('email')}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="sm:col-span-2">
          <label htmlFor="don-phone" className="form-label">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="don-phone"
            type="tel"
            autoComplete="tel"
            placeholder="XXXXX XXXXX"
            className={`form-input ${errors.phone ? 'error' : ''}`}
            {...register('phone')}
          />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="don-message" className="form-label">
            Message (Optional)
          </label>
          <textarea
            id="don-message"
            rows={3}
            placeholder="Leave a message of support or dedication..."
            className="form-input resize-none"
            {...register('message')}
          />
        </div>
      </div>


      <Button
        type="submit"
        variant="donate"
        size="lg"
        loading={status === 'loading'}
        icon={<FaHeart size={18} />}
        fullWidth
      >
        {status === 'loading' ? 'Processing...' : `Donate ${currentAmount ? formatCurrency(Number(currentAmount)) : 'Now'}`}
      </Button>

      <p className="text-center text-xs text-[#9CA3AF] mt-3 flex items-center justify-center gap-1.5">
        <span>🛡️</span> Zero transaction fees · Direct to NGO bank account via UPI
      </p>
    </form>
  );
}
