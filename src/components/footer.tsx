import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden mx-10 rounded-4xl">
      <div className="container mx-auto px-5 py-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-400 mb-1">
                Ready to start a project?
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s talk today.
              </h3>

              <div className="flex items-start gap-3 max-w-lg">
                <Image
                  src="http://tyakkai.com/wp-content/uploads/2024/09/tyakkai-logo.png"
                  alt="Company logo"
                  width={48}
                  height={48}
                  className="object-contain mt-1"
                />
                <p className="text-sm text-gray-300">
                  Enjoy unlimited design services whenever you need them, with
                  the flexibility to request revisions and new designs as
                  required
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Book a call with us! 👋
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-8 pt-8 border-t border-gray-800">
            <div className="md:w-1/4">
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">New York, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">Phone: (+62) 4444-4444</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 md:w-3/4">
              <div>
                <h4 className="text-sm text-gray-400 font-medium mb-3">INFO</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/services" className="hover:text-gray-300">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-gray-300">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/reviews" className="hover:text-gray-300">
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-gray-300">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm text-gray-400 font-medium mb-3">
                  RESOURCES
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/templates" className="hover:text-gray-300">
                      Premium Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/styleguide" className="hover:text-gray-300">
                      Styleguide
                    </Link>
                  </li>
                  <li>
                    <Link href="/changelog" className="hover:text-gray-300">
                      Changelog
                    </Link>
                  </li>
                  <li>
                    <Link href="/404" className="hover:text-gray-300">
                      404
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm text-gray-400 font-medium mb-3">
                  LEGAL
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/privacy" className="hover:text-gray-300">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-gray-300">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund" className="hover:text-gray-300">
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/license" className="hover:text-gray-300">
                      License
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medium-sized decorative element */}
      <div className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-orange-600 rounded-full -translate-y-1/3 translate-x-1/3 z-0">
        <div className="absolute inset-0 border-2 border-black rounded-full m-3"></div>
      </div>
    </footer>
  );
}
