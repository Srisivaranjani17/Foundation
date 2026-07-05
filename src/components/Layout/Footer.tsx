import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhone,
  FaEnvelope,
  FaMapPin,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMessage,
} from 'react-icons/fa6';
import { logoConfig } from '../../content/navigation';
import { footerData, footerQuickLinks, footerRegistration } from '../../content/footer';
import { contactInfo, socialLinks, whatsappConfig } from '../../content/contact';
import { buildWhatsAppUrl } from '../../utils/formatters';

const iconMap: Record<string, React.ReactNode> = {
  facebook: <FaFacebook size={18} />,
  instagram: <FaInstagram size={18} />,
  linkedin: <FaLinkedin size={18} />,
  youtube: <FaYoutube size={18} />,
  'message-circle': <FaMessage size={18} />,
};

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(whatsappConfig.number, whatsappConfig.message);

  return (
    <footer className="bg-[#1F2937] text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 – Logo + Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden group-hover:bg-white/20 transition-colors">
                <img
                  src={logoConfig.src}
                  alt={logoConfig.alt}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <p className="font-heading font-bold text-white">{logoConfig.name}</p>
                <p className="text-xs text-[#3FA34D]">{footerRegistration.regNumber}</p>
              </div>
            </Link>

            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5">
              {footerData.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#3FA34D] animate-pulse" />
              <span className="text-xs text-[#9CA3AF]">{footerRegistration.registeredUnder}</span>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-base relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#3FA34D] -mb-2" />
            </h3>
            <ul className="flex flex-col gap-3 mt-3" role="list">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[#9CA3AF] hover:text-[#3FA34D] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3FA34D] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-base relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#F59E2A] -mb-2" />
            </h3>
            <ul className="flex flex-col gap-4 mt-3" role="list">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#3FA34D]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaPhone size={14} className="text-[#3FA34D]" />
                </div>
                <div>
                  <p className="text-xs text-[#6B7280] mb-0.5">Phone</p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                    className="text-[#D1D5DB] hover:text-white text-sm transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F59E2A]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaEnvelope size={14} className="text-[#F59E2A]" />
                </div>
                <div>
                  <p className="text-xs text-[#6B7280] mb-0.5">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-[#D1D5DB] hover:text-white text-sm transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C8A2E8]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaMapPin size={14} className="text-[#C8A2E8]" />
                </div>
                <div>
                  <p className="text-xs text-[#6B7280] mb-0.5">Address</p>
                  <p className="text-[#D1D5DB] text-sm leading-relaxed whitespace-pre-line">
                    {contactInfo.address}
                  </p>
                </div>
              </li>
              
            </ul>
          </div>

          {/* Column 4 – Social Media */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-base relative">
              Follow Us
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#C8A2E8] -mb-2" />
            </h3>
            <p className="text-[#9CA3AF] text-sm mb-5 mt-3">
              Stay connected and follow our journey of service and compassion.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.id === 'whatsapp' ? whatsappUrl : social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.platform}`}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                  style={{
                    background: `${social.color}20`,
                    color: social.color,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = social.color;
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${social.color}20`;
                    (e.currentTarget as HTMLAnchorElement).style.color = social.color;
                  }}
                >
                  {iconMap[social.icon] ?? <FaMessage size={18} />}
                </a>
              ))}
            </div>

            {/* Donate CTA */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#3FA34D]/20 to-[#F59E2A]/20 border border-white/10">
              <p className="text-sm font-heading font-semibold text-white mb-1">
                Ready to make an impact?
              </p>
              <p className="text-xs text-[#9CA3AF] mb-3">
                Every rupee feeds a hungry soul.
              </p>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F59E2A] text-white text-sm font-semibold font-heading
                  hover:bg-[#d4851f] transition-colors duration-200"
              >
                Donate Now →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6B7280] text-sm text-center sm:text-left">
            {footerData.copyright}
          </p>
          <div className="flex items-center gap-4">
            <Link
              to={footerData.privacyUrl}
              className="text-[#6B7280] hover:text-[#9CA3AF] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#374151]">|</span>
            <Link
              to={footerData.termsUrl}
              className="text-[#6B7280] hover:text-[#9CA3AF] text-sm transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
