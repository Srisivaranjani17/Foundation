/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaCircleCheck, FaCircleExclamation, FaPaperPlane } from 'react-icons/fa6';
import { Button } from '../UI/Button';
import { submitVolunteerRegistration } from '../../services/volunteers';
import { areasOfInterest, availabilityOptions } from '../../content/volunteer';

const schema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  city: z.string().min(2, 'Please enter your city'),
  occupation: z.string().min(2, 'Please enter your occupation'),
  areaOfInterest: z.string().min(1, 'Please select an area of interest'),
  availability: z.string().min(1, 'Please select your availability'),
  message: z.string().optional().default(''),
});

export function VolunteerForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<any>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setSubmitStatus('idle');
    const result = await submitVolunteerRegistration(data);
    if (result.success) {
      setSubmitStatus('success');
      reset();
    } else {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-20 h-20 rounded-full bg-[#e8f5ea] flex items-center justify-center">
          <FaCircleCheck size={40} className="text-[#3FA34D]" />
        </div>
        <h3 className="font-heading font-bold text-[#1F2937] text-2xl">
          Registration Successful! 🎉
        </h3>
        <p className="text-[#4B5563] max-w-md leading-relaxed">
          Thank you for signing up to volunteer with MIASei Foundation. Our team will contact
          you within 48 hours with next steps.
        </p>
        <Button variant="primary" onClick={() => setSubmitStatus('idle')}>
          Register Another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Volunteer registration form"
    >
      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-red-50 border border-red-200">
          <FaCircleExclamation size={18} className="text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-sm">
            Something went wrong. Please try again or contact us directly.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="vol-fullName" className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="vol-fullName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={`form-input ${errors.fullName ? 'error' : ''}`}
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className="form-error">{errors.fullName.message?.toString()}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="vol-email" className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="vol-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={`form-input ${errors.email ? 'error' : ''}`}
            {...register('email')}
          />
          {errors.email && (
            <p className="form-error">{errors.email.message?.toString()}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="vol-phone" className="form-label">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="vol-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            className={`form-input ${errors.phone ? 'error' : ''}`}
            {...register('phone')}
          />
          {errors.phone && (
            <p className="form-error">{errors.phone.message?.toString()}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label htmlFor="vol-city" className="form-label">
            City <span className="text-red-500">*</span>
          </label>
          <input
            id="vol-city"
            type="text"
            autoComplete="address-level2"
            placeholder="e.g. Chennai"
            className={`form-input ${errors.city ? 'error' : ''}`}
            {...register('city')}
          />
          {errors.city && (
            <p className="form-error">{errors.city.message?.toString()}</p>
          )}
        </div>

        {/* Occupation */}
        <div>
          <label htmlFor="vol-occupation" className="form-label">
            Occupation <span className="text-red-500">*</span>
          </label>
          <input
            id="vol-occupation"
            type="text"
            placeholder="e.g. Software Engineer"
            className={`form-input ${errors.occupation ? 'error' : ''}`}
            {...register('occupation')}
          />
          {errors.occupation && (
            <p className="form-error">{errors.occupation.message?.toString()}</p>
          )}
        </div>

        {/* Area of Interest */}
        <div>
          <label htmlFor="vol-area" className="form-label">
            Area of Interest <span className="text-red-500">*</span>
          </label>
          <select
            id="vol-area"
            className={`form-input ${errors.areaOfInterest ? 'error' : ''}`}
            {...register('areaOfInterest')}
          >
            <option value="">Select an area</option>
            {areasOfInterest.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          {errors.areaOfInterest && (
            <p className="form-error">{errors.areaOfInterest.message?.toString()}</p>
          )}
        </div>

        {/* Availability */}
        <div className="sm:col-span-2">
          <label htmlFor="vol-availability" className="form-label">
            Availability <span className="text-red-500">*</span>
          </label>
          <select
            id="vol-availability"
            className={`form-input ${errors.availability ? 'error' : ''}`}
            {...register('availability')}
          >
            <option value="">Select your availability</option>
            {availabilityOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.availability && (
            <p className="form-error">{errors.availability.message?.toString()}</p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="vol-message" className="form-label">
            Message / Why do you want to volunteer?
          </label>
          <textarea
            id="vol-message"
            rows={4}
            placeholder="Tell us about yourself and why you'd like to volunteer with MIASei Foundation..."
            className="form-input resize-none"
            {...register('message')}
          />
        </div>
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          icon={<FaPaperPlane size={18} />}
          iconPosition="right"
          fullWidth
        >
          {isSubmitting ? 'Submitting...' : 'Submit Registration'}
        </Button>
        <p className="text-center text-xs text-[#9CA3AF] mt-3">
          By registering, you agree to be contacted by MIASei Foundation regarding volunteer opportunities.
        </p>
      </div>
    </form>
  );
}
