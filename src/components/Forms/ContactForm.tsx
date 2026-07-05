import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaCircleCheck, FaCircleExclamation, FaPaperPlane } from 'react-icons/fa6';
import { Button } from '../UI/Button';
import { submitContactMessage } from '../../services/contact';
import type { ContactFormData } from '../../types';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

const subjectOptions = [
  'Volunteer Inquiry',
  'Donation Query',
  'Program Information',
  'Partnership Proposal',
  'Media & Press',
  'General Query',
  'Other',
];

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle');
    const result = await submitContactMessage(data);
    if (result.success) {
      setSubmitStatus('success');
      reset();
    } else {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-20 h-20 rounded-full bg-[#e8f5ea] flex items-center justify-center">
          <FaCircleCheck size={40} className="text-[#3FA34D]" />
        </div>
        <h3 className="font-heading font-bold text-[#1F2937] text-xl">
          Message Sent! ✅
        </h3>
        <p className="text-[#4B5563] max-w-sm leading-relaxed text-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setSubmitStatus('idle')}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
    >
      {submitStatus === 'error' && (
        <div className="flex items-center gap-3 p-4 mb-5 rounded-xl bg-red-50 border border-red-200">
          <FaCircleExclamation size={18} className="text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-sm">
            Failed to send your message. Please try again.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="con-name" className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="con-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={`form-input ${errors.name ? 'error' : ''}`}
            {...register('name')}
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="con-email" className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="con-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={`form-input ${errors.email ? 'error' : ''}`}
            {...register('email')}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="con-subject" className="form-label">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="con-subject"
            className={`form-input ${errors.subject ? 'error' : ''}`}
            {...register('subject')}
          >
            <option value="">Select a subject</option>
            {subjectOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.subject && <p className="form-error">{errors.subject.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="con-message" className="form-label">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="con-message"
            rows={5}
            placeholder="Write your message here..."
            className={`form-input resize-none ${errors.message ? 'error' : ''}`}
            {...register('message')}
          />
          {errors.message && <p className="form-error">{errors.message.message}</p>}
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
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
