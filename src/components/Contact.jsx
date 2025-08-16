'use client';
import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const service_key = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const temp_key = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_key, temp_key, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="py-10 pb-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-xl mx-auto px-12 bg-white dark:bg-gray-800 py-12 shadow-xl dark:shadow-md rounded-2xl mt-10">
        <h2 className="text-3xl font-bold text-center text-blue-950 dark:text-white mb-8 mt-0">
          Get in Touch
        </h2>

        <form onSubmit={sendEmail} ref={form} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <FiUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FiMessageCircle className="absolute top-4 left-4 text-gray-400 dark:text-gray-300" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
