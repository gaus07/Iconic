"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Briefcase, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white m-4 md:m-6 lg:m-8 rounded-3xl overflow-hidden">
      <div className="p-8 md:p-10 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 mb-8">
          {/* Left Section - Subscription */}
          <div className="col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Discover exclusive real estate opportunities
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Lorem ipsum dolor sit amet consectetur. Egestas eu amet dictum tellus. Purus morbi lorem viverra cros.
            </p>

            {/* Email Subscription */}
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button className="w-full bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                Subscribe
                <span>→</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Center Section - Utility Pages */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Utility pages</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Start here
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Style guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Password protected
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  404 not found
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Us (2x2 Grid) */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex gap-3">
                <Mail size={18} className="text-gray-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-400 mb-1">Email address</p>
                  <p className="text-white font-medium">info@home.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone size={18} className="text-gray-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-400 mb-1">Phone number</p>
                  <p className="text-white font-medium">(123) 456 - 7890</p>
                </div>
              </div>

              {/* Sales */}
              <div className="flex gap-3">
                <Briefcase size={18} className="text-gray-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-400 mb-1">Sales executives</p>
                  <p className="text-white font-medium">sales@home.com</p>
                </div>
              </div>

              {/* Support */}
              <div className="flex gap-3">
                <MessageCircle size={18} className="text-gray-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-400 mb-1">Help & support</p>
                  <p className="text-white font-medium">support@home.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-white font-bold text-lg">🏠</div>
                <span className="font-bold text-white">Property X</span>
              </div>
              <p className="text-gray-500 text-xs md:text-sm">
                Copyright © Property X | Designed by BRIX Templates – Powered by Webflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}