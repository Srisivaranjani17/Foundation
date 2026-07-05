import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaXmark, FaPhone } from 'react-icons/fa6';
import { navItems, logoConfig } from '../../content/navigation';
import { whatsappConfig } from '../../content/contact';
import { buildWhatsAppUrl } from '../../utils/formatters';
import { Button } from '../UI/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    /* eslint-disable-next-line react-hooks/set-state-in-effect */
    setIsMobileOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  const whatsappUrl = buildWhatsAppUrl(whatsappConfig.number, whatsappConfig.message);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled
            ? 'rgba(255,255,255,0.97)'
            : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          boxShadow: isScrolled
            ? '0 2px 24px rgba(0,0,0,0.1)'
            : '0 1px 12px rgba(0,0,0,0.06)',
        }}
      >
        <div className="container-custom">
          <nav
            className="flex items-center justify-between h-[72px]"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="MIASei Foundation Home"
            >
              <img
                src={logoConfig.src}
                alt={logoConfig.alt}
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = 'none';
                }}
              />
              <div className="hidden sm:block">
                <p
                  className="font-heading font-bold text-[#1F2937] leading-tight"
                  style={{ fontSize: '0.95rem' }}
                >
                  {logoConfig.name}
                </p>
                <p className="text-[0.65rem] text-[#3FA34D] font-medium leading-tight">
                  {logoConfig.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`
                      px-4 py-2 rounded-lg font-heading font-medium text-sm
                      transition-all duration-200 relative
                      ${isActive(item.href)
                        ? 'text-[#3FA34D] bg-[#e8f5ea]'
                        : 'text-[#4B5563] hover:text-[#3FA34D] hover:bg-[#e8f5ea]'
                      }
                    `}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold font-heading
                  bg-[#25D366] text-white hover:bg-[#1db954] transition-all duration-200
                  shadow-[0_2px_12px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
              >
                <FaPhone size={15} />
                WhatsApp
              </a>
              <Button as="a" href="/donate" variant="donate" size="sm">
                Donate Now
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden p-2 rounded-xl text-[#1F2937] hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img src={logoConfig.src} alt={logoConfig.alt} className="h-10 w-10 object-contain" />
                  <p className="font-heading font-bold text-[#1F2937] text-sm">
                    {logoConfig.name}
                  </p>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <FaXmark size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 p-5 overflow-y-auto" aria-label="Mobile navigation">
                <ul className="flex flex-col gap-2" role="list">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        to={item.href}
                        className={`
                          flex items-center px-4 py-3 rounded-xl font-heading font-medium text-sm
                          transition-all duration-200
                          ${isActive(item.href)
                            ? 'text-[#3FA34D] bg-[#e8f5ea] font-semibold'
                            : 'text-[#4B5563] hover:text-[#3FA34D] hover:bg-[#e8f5ea]'
                          }
                        `}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom Actions */}
              <div className="p-5 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold font-heading
                    bg-[#25D366] text-white transition-all duration-200"
                >
                  <FaPhone size={16} />
                  Chat on WhatsApp
                </a>
                <Button as="a" href="/donate" variant="donate" fullWidth>
                  Donate Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
}
