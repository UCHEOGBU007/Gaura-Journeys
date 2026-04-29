import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section
        className="relative py-24 md:py-32 px-4 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-[#173d8c]/60 to-[#173d8c]/90" />
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-widest text-sm font-medium mb-4 block text-blue-200"
          >
            Connect With Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Start Your Next <span className="text-blue-300">Adventure</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-blue-50 font-light leading-relaxed"
          >
            Whether you're looking for a hidden gem or a classic destination,
            our travel experts are ready to craft your perfect itinerary.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Have questions about our tours? Want to customize your journey?
              Our team is here to help you create unforgettable memories.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-[#173d8c]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Office Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Jl. Sudirman No. 123
                    <br />
                    Jakarta Pusat 10220
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-[#173d8c]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a
                      href="tel:+622112345678"
                      className="hover:text-[#173d8c] hover:underline hover:font-bold transition-colors "
                    >
                      +62 21 1234 5678
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a
                      href="tel:+6281234567890"
                      className="hover:text-[#173d8c] hover:underline hover:font-bold transition-colors"
                    >
                      +62 812 3456 7890
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-[#173d8c]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:info@gaurajourneys.com"
                      className="hover:text-[#173d8c] transition-colors hover:underline hover:font-bold"
                    >
                      info@gaurajourneys.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a
                      href="mailto:support@gaurajourneys.com"
                      className="hover:text-[#173d8c] hover:underline hover:font-bold transition-colors"
                    >
                      support@gaurajourneys.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-[#173d8c]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600 font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-[#173d8c]/5 border border-blue-100 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Emergency Contact
              </h3>
              <p className="text-gray-600 mb-4">
                For urgent matters during tours, our 24/7 emergency hotline:
              </p>
              <a
                href="tel:+6281199998888"
                className="text-[#173d8c] font-bold text-2xl hover:underline underline-offset-4"
              >
                +62 811 9999 8888
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-8 md:p-10 border border-gray-100"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </h2>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-green-700">
                    Message sent successfully!
                  </p>
                  <p className="text-green-600 text-sm">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              </motion.div>
            )}

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-red-700 font-medium">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#173d8c] focus:bg-white focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#173d8c] focus:bg-white focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#173d8c] focus:bg-white focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Question</option>
                  <option value="custom">Custom Tour Request</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#173d8c] focus:bg-white focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#173d8c] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-800 shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Find Us on the Map
            </h2>
            <p className="text-gray-600">
              Visit our headquarters in the heart of Jakarta
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-200 overflow-hidden h-112.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24174312678!2d106.78918235!3d-6.229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e3fa87%3A0x401576d1459c280!2sJakarta%2C%20Special%20Capital%20Region%20of%20Jakarta!5e0!3m2!1sen!2sid!4v1714210000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              className="rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
