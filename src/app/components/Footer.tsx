// import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

// export function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">Gaura Journeys</h3>
//             <p className="text-gray-400">
//               Explore the beautiful destinations of Indonesia with our curated tour packages.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Info</h3>
//             <div className="space-y-3 text-gray-400">
//               <div className="flex items-center gap-2">
//                 <Phone className="w-5 h-5" />
//                 <span>+62 123 456 7890</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Mail className="w-5 h-5" />
//                 <span>info@gaurajourneys.com</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin className="w-5 h-5" />
//                 <span>Jakarta, Indonesia</span>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-xl font-bold mb-4">Follow Us</h3>
//             <div className="flex gap-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Facebook className="w-6 h-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Instagram className="w-6 h-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Twitter className="w-6 h-6" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <p>&copy; 2026 Gaura Journeys. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="flex items-center flex-row gap-5">
                <img
                  src="public/Tourismlogo.jpeg"
                  alt="Logo"
                  className="h-10 w-auto rounded-full object-cover"
                />
                <h3 className="text-xl font-bold  ">Gaura Journeys</h3>
              </span>

              <p className="text-gray-400 mt-4">
                Explore the beautiful destinations of Indonesia with our curated
                tour packages. Experience authenticity, comfort, and adventure.
              </p>
            </div>

            {/* contact info and social media links */}

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Contact Info
              </h3>
              <div className="flex flex-col gap-y-4">
                {/* Phone Number */}
                <a
                  href="tel:+621234567890"
                  className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <div className="mt-1 p-2 rounded-lg bg-[#173d8c]/10 group-hover:bg-[#173d8c] transition-colors">
                    <Phone className="w-5 h-5 text-[#173d8c] group-hover:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                      Call Us
                    </span>
                    <span className="text-sm md:text-base">
                      +62 123 456 7890
                    </span>
                  </div>
                </a>

                {/* Email Address */}
                <a
                  href="mailto:info@gaurajourneys.com"
                  className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <div className="mt-1 p-2 rounded-lg bg-[#173d8c]/10 group-hover:bg-[#173d8c] transition-colors">
                    <Mail className="w-5 h-5 text-[#173d8c] group-hover:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                      Email Us
                    </span>
                    <span className="text-sm md:text-base">
                      info@gaurajourneys.com
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="mt-1 p-2 rounded-lg bg-[#173d8c]/10">
                    <MapPin className="w-5 h-5 text-[#173d8c]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                      Visit Us
                    </span>
                    <span className="text-sm md:text-base">
                      Jakarta, Indonesia
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* social media links  */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#173d8c] transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#173d8c] transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#173d8c] transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* copyrights footer */}

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Gaura Journeys. All rights
              reserved.
            </p>
            <p className="mt-2">
              Designed and developed by{" "}
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-xxl hover:underline"
              >
                Mr Smith
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6285179889211" // Replace with your actual number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        {/* Optional: Hover Label */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap font-semibold">
          Chat with us on WhatsApp
        </span>
      </a>
    </>
  );
}
