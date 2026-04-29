import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Plane } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/tour-areas", label: "Tour Areas" },
    { path: "/book-reservation", label: "Book Reservation" },
    { path: "/notes", label: "Notes" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Tourismlogo.jpeg"
              alt="Logo"
              className="h-10 w-auto rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-[#173d8c]">
              Gaura Journeys
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors font-medium ${
                  isActive(link.path)
                    ? "text-[#173d8c] underline underline-offset-4 font-extrabold text-xl"
                    : "text-gray-700 hover:text-[#173d8c] text-lg font-extrabold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-[#173d8c] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 transition-colors font-medium ${
                    isActive(link.path)
                      ? "text-[#173d8c]"
                      : "text-gray-700 hover:text-[#173d8c]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
