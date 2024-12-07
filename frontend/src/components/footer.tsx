import React from 'react';
import { Instagram,Facebook, Linkedin ,Twitter , Youtube } from 'lucide-react';
import logo from "@/assets/pixelcut-export (2).png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-1 flex flex-col items-start space-y-4">
            <div>
              {/* Replace with your company logo */}
              <a href="/" className="text-gray-900">
              <img
                src={logo} // Change this path to your logo's file
                alt="Company Logo"
                className="h-8 w-auto"
              />
                </a>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="col-span-2 md:col-span-1 md:ml-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://missminutes.in/" className="text-sm text-gray-600 hover:text-gray-900">
MissMinutes                </a>
              </li>
              {/* <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Insights
                </a>
              </li> */}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Submit Ticket
                </a>
              </li>
            
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
          
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">License</h3>
            <ul className="mt-4 space-y-2">
           


              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">{new Date().getFullYear()} GenuiQ Labs Pvt Ltd. All rights reserved.</p>
            <div className="flex mt-6 space-x-6 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span><Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span><Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">X</span><Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span><Linkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">YouTube</span><Youtube />
              </a>
            </div>
          </div>

          <div className="mt-6">
            {/* <h3 className="text-sm font-semibold text-gray-900">Subscribe to our newsletter</h3>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email-address"
                autoComplete="email"
                className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs"
                placeholder="Enter your email"
              />
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
