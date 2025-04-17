'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { toast } from 'react-toastify';
import { createContactReq } from '@/lib/portfolioApi';

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>();

  async function onSubmit (data: FormValues){
    try {
      await createContactReq(data);
      reset();
      toast.success('Your Request Have Been Send Successfully');
    } catch (error) {
      console.error('Contact form submission error:', error);
      const errorMessage =
        (error as Error)?.message ||
        'Failed to submit contact request. Please try again later.';
      toast.error(errorMessage);
    }
  };

  return (
    <section id="contact" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Ping Me
            </span>
            <span className="ml-2 text-white">🚀</span>
          </h2>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 px-4 py-3 text-white"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400"
                  >
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
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 px-4 py-3 text-white"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-400"
                  >
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
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 px-4 py-3 text-white"
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message', {
                      required: 'Message is required'
                    })}
                    className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 px-4 py-3 text-white"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Send Message
                </Button>
              </form>

              {/* CV Link */}
              <div className="mt-6 text-center">
                <p className="mb-2 text-gray-400">Want To See My CV?</p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href="https://drive.google.com/file/d/1FMO9RbfcUPc3BRRhHgAQ57SWDThEJxej/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
