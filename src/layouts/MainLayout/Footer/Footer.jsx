import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className=" bg-black text-white">
      <div className="container mx-auto">
        {/* Top Footer */}
        <div className="footer grid lg:grid-cols-5 lg:justify-items-end gap-10 px-5 lg:px-0 py-20 border-b border-white/30">
          <aside>
            <h6 className="font-medium text-2xl mb-5 whitespace-nowrap">
              CS — Ticket System
            </h6>
            <p className="text-[#A1A1AA] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </aside>
          <nav>
            <h6 className="font-medium text-[20px] mb-4">Company</h6>
            <a className="link link-hover text-[#A1A1AA] mb-4">About us</a>
            <a className="link link-hover text-[#A1A1AA] mb-4">Our Mission</a>
            <a className="link link-hover text-[#A1A1AA] mb-4">Contact Sales</a>
          </nav>
          <nav>
            <h6 className="font-medium text-[20px] mb-4">Services</h6>
            <a className="link link-hover text-[#A1A1AA] mb-4">
              Products & Services
            </a>
            <a className="link link-hover text-[#A1A1AA] mb-4">
              Customer Stories
            </a>
            <a className="link link-hover text-[#A1A1AA] mb-4">Download Apps</a>
          </nav>
          <nav>
            <h6 className="font-medium text-[20px] mb-4">Information</h6>
            <a className="link link-hover text-[#A1A1AA] mb-4">
              Privacy Policy
            </a>
            <a className="link link-hover text-[#A1A1AA] mb-4">
              Terms & Conditions
            </a>
            <a className="link link-hover text-[#A1A1AA] mb-4">Join Us</a>
          </nav>
          <nav>
            <h6 className="font-medium text-[20px] mb-4 whitespace-nowrap">
              Social Links
            </h6>

            <div className="flex gap-4">
              <FaXTwitter className="text-[20px]" />
              <a className="link link-hover text-[#A1A1AA] mb-4 whitespace-nowrap">
                @CS — Ticket System
              </a>
            </div>
            <div className="flex gap-4">
              <FaLinkedin className="text-[20px]" />
              <a className="link link-hover text-[#A1A1AA] mb-4 whitespace-nowrap">
                @CS — Ticket System
              </a>
            </div>
            <div className="flex gap-4">
              <FaFacebook className="text-[20px]" />
              <a className="link link-hover text-[#A1A1AA] mb-4 whitespace-nowrap">
                @CS — Ticket System
              </a>
            </div>
            <div className="flex gap-4">
              <HiOutlineMail className="text-[20px]" />
              <a className="link link-hover text-[#A1A1AA] mb-4 whitespace-nowrap">
                support@cst.com
              </a>
            </div>
          </nav>
        </div>
        {/* Bottom Footer */}
        <div className="footer sm:footer-horizontal footer-center  py-8">
          <aside>
            <p className="text-xs lg:text-base">
              Copyright © {new Date().getFullYear()} - All right reserved by CS
              — Ticket System
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
