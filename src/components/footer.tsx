import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white flex flex-col items-center justify-center py-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div>
            <div className="relative h-16 w-48">
              <div className="font-bold text-3xl">
                Tyakk
                <span className="relative">
                  ai
                  <span className="absolute -z-10 -top-1 -left-1 bg-yellow-300 rounded-full w-10 h-10"></span>
                </span>
              </div>
              <div className="text-sm mt-1">solutions</div>
            </div>
          </div>

          {/* Projects Column */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  SBDI
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Focus Academy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  AAIC
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  GIA
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Lockland
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-yellow-400 hover:underline">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Social Media Ads
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Google Ads
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Graphics & Web Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Story Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Our Story</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    About Tyakkai
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Strategy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div>
              <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
              <div className="flex space-x-4 mt-2">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                  </svg>
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright and Back to Top */}
        <div className="mt-12 pt-4 border-t border-gray-200 flex justify-between items-center">
          <Link
            href="#top"
            className="bg-yellow-300 rounded-full p-2 hover:bg-yellow-400 transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="h-5 w-5" />
          </Link>
          <div className="text-sm">Copyright © 2025 | Tyakkai Solutions</div>
        </div>

        {/* URL at bottom */}
        <div className="mt-2 text-xs text-gray-600">
          <Link
            href="https://tyakkai.com/service/content-marketing/"
            className="hover:underline"
          >
            https://tyakkai.com/service/content-marketing/
          </Link>
        </div>
      </div>
    </footer>
  );
}
