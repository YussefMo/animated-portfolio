'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { FileText } from 'lucide-react';
import { createContactReq } from '@/lib/portfolioApi';
import { personal } from '@/lib/data';
import Modal from './Modal';
import MagneticButton from './MagneticButton';

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    if (data.message.length > 200) {
      toast.error('Message cannot exceed 200 characters.');
      return;
    }
    if (data.message.length < 10) {
      toast.error('Message cannot be less than 10 characters.');
      return;
    }

    try {
      await createContactReq(data);
      reset();
      toast.success('Your request has been sent successfully.');
      onClose();
    } catch (error) {
      console.error('Contact form submission error:', error);
      const errorMessage =
        (error as Error)?.message ||
        'Failed to submit contact request. Please try again later.';
      toast.error(errorMessage);
    }
  }

  const inputClass =
    'mt-1 block w-full rounded-md border border-border-glass bg-surface-container-low px-4 py-3 font-body-md text-text-primary placeholder:text-text-secondary/50 focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Initiate Connection">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="block font-body-md text-sm text-text-secondary">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className={inputClass}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-error">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block font-body-md text-sm text-text-secondary">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address'
              }
            })}
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block font-body-md text-sm text-text-secondary">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9+\s()-]{7,15}$/,
                message: 'Invalid phone number'
              }
            })}
            className={inputClass}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-error">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block font-body-md text-sm text-text-secondary">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message', { required: 'Message is required' })}
            className={inputClass}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error">{errors.message.message}</p>
          )}
        </div>

        <MagneticButton type="submit" variant="primary" className="w-full py-3" disabled={isSubmitting}>
          {isSubmitting ? 'Transmitting...' : 'Send Message'}
        </MagneticButton>
      </form>

      <div className="mt-6 border-t border-border-glass pt-6 text-center">
        <p className="mb-3 font-body-md text-sm text-text-secondary">Want to see my CV?</p>
        <a
          href={personal.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary-container px-4 py-2 font-label-caps text-label-caps text-on-secondary-container transition-colors hover:bg-secondary-fixed-dim"
        >
          <FileText className="h-4 w-4" />
          View CV
        </a>
      </div>
    </Modal>
  );
}
