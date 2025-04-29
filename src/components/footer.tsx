import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-black text-white px-8 py-12 md:px-12 md:py-16 rounded-4xl m-10">
      {/* CTA Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-300 mb-2">
            Ready to start a project?
          </h2>
          <h3 className="text-4xl md:text-5xl font-medium mb-6">
            Let&apos;s talk today.
          </h3>
        </div>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors mt-4 md:mt-0"
        >
          Book a call with us! 👋
        </Link>
      </div>

      <hr className="border-gray-800 mb-12" />

      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="md:col-span-1">
          <div className="mb-6">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0Z"
                fill="#FF4500"
                fillOpacity="0.2"
              />
              <path
                d="M45 20C40.5817 20 37 23.5817 37 28C37 32.4183 40.5817 36 45 36C49.4183 36 53 32.4183 53 28C53 23.5817 49.4183 20 45 20Z"
                fill="#FF4500"
              />
            </svg>
          </div>
          <p className="text-gray-400 mb-6">
            Enjoy unlimited design services whenever you need them, with the
            flexibility to request revisions and new designs as often as
            required
          </p>
          <div className="flex items-center text-gray-400 mb-3">
            <MapPin className="mr-2 h-5 w-5" />
            <span>New York, USA</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Phone className="mr-2 h-5 w-5" />
            <span>Phone: (+62) 4444-4444</span>
          </div>
        </div>

        {/* INFO Column */}
        <div>
          <h4 className="text-gray-500 font-medium mb-4">INFO</h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Faq
              </Link>
            </li>
          </ul>
        </div>

        {/* RESOURCES Column */}
        <div>
          <h4 className="text-gray-500 font-medium mb-4">RESOURCES</h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/templates"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Premium Templates
              </Link>
            </li>
            <li>
              <Link
                href="/styleguide"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Styleguide
              </Link>
            </li>
            <li>
              <Link
                href="/changelog"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Changelog
              </Link>
            </li>
            <li>
              <Link
                href="/404"
                className="text-white hover:text-gray-300 transition-colors"
              >
                404
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL Column */}
        <div>
          <h4 className="text-gray-500 font-medium mb-4">LEGAL</h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/privacy"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/refund"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Orange Shape */}
      <div className="relative">
        <div className="absolute right-0 bottom-0 w-24 h-24 md:w-32 md:h-32">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M120 0C120 66.2742 66.2742 120 0 120V0H120Z"
              fill="#FF4500"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
