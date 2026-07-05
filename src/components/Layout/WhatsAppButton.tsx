import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { whatsappConfig } from '../../content/contact';
import { buildWhatsAppUrl } from '../../utils/formatters';


export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const url = buildWhatsAppUrl(whatsappConfig.number, whatsappConfig.message);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-card-hover border border-gray-100 p-4 max-w-[220px]"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-heading font-semibold text-[#1F2937] text-sm">
                Chat with Us!
              </p>
              <button
                onClick={() => setShowTooltip(false)}
                aria-label="Close tooltip"
                className="text-[#9CA3AF] hover:text-[#1F2937] transition-colors"
              >
                <IoMdClose size={14} />
              </button>
            </div>
            <p className="text-[#4B5563] text-xs leading-relaxed">
              Hi! 👋 Have questions about volunteering or donations? Chat with us directly!
            </p>
            <div className="mt-2 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs text-[#25D366] font-medium">Online</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with MIASei Foundation"
        id="whatsapp-float-btn"
        className="w-14 h-14 rounded-full flex items-center justify-center whatsapp-pulse cursor-pointer"
        style={{ background: '#25D366' }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <FaWhatsapp size={26} className="text-white" />
      </motion.a>
    </div>
  );
}
