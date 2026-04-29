// import { useState } from "react";
// import { motion } from "motion/react";
// import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState("");

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitError("");

//     try {
//       const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSubmitSuccess(true);
//         setFormData({ name: "", email: "", subject: "", message: "" });
//         setTimeout(() => setSubmitSuccess(false), 5000);
//       } else {
//         setSubmitError("Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       setSubmitError("An error occurred. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <section
//         className="relative py-16 px-4 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1720260991024-ff5d17a0c4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
//         }}
//       >
//         <div className="absolute inset-0 bg-linear-to-r from-teal-600/90 to-blue-600/90" />
//         <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             Get in Touch
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-xl"
//           >
//             We'd love to hear from you and help plan your perfect journey
//           </motion.p>
//         </div>
//       </section>

//       <section className="py-12 px-4 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
//             <p className="text-gray-600 mb-8">
//               Have questions about our tours? Want to customize your journey?
//               Our team is here to help you create unforgettable memories.
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-teal-100 p-3 rounded-lg">
//                   <MapPin className="w-6 h-6 text-teal-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Office Address</h3>
//                   <p className="text-gray-600">
//                     Jl. Sudirman No. 123
//                     <br />
//                     Jakarta Pusat 10220
//                     <br />
//                     Indonesia
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-teal-100 p-3 rounded-lg">
//                   <Phone className="w-6 h-6 text-teal-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Phone</h3>
//                   <p className="text-gray-600">+62 21 1234 5678</p>
//                   <p className="text-gray-600">+62 812 3456 7890</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-teal-100 p-3 rounded-lg">
//                   <Mail className="w-6 h-6 text-teal-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Email</h3>
//                   <p className="text-gray-600">info@gaurajourneys.com</p>
//                   <p className="text-gray-600">support@gaurajourneys.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-teal-100 p-3 rounded-lg">
//                   <Clock className="w-6 h-6 text-teal-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">Business Hours</h3>
//                   <p className="text-gray-600">
//                     Monday - Friday: 9:00 AM - 6:00 PM
//                   </p>
//                   <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
//                   <p className="text-gray-600">Sunday: Closed</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
//               <h3 className="font-semibold mb-2">Emergency Contact</h3>
//               <p className="text-gray-600 mb-2">
//                 For urgent matters during tours, our 24/7 emergency hotline:
//               </p>
//               <p className="text-teal-600 font-bold text-xl">
//                 +62 811 9999 8888
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 }}
//             className="bg-white rounded-lg shadow-lg p-8"
//           >
//             <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

//             {submitSuccess && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3"
//               >
//                 <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
//                 <div>
//                   <p className="font-semibold text-green-700">
//                     Message sent successfully!
//                   </p>
//                   <p className="text-green-600 text-sm">
//                     We'll get back to you as soon as possible.
//                   </p>
//                 </div>
//               </motion.div>
//             )}

//             {submitError && (
//               <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
//                 <p className="text-red-700">{submitError}</p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block font-semibold mb-2">Your Name *</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label className="block font-semibold mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                   placeholder="john@example.com"
//                 />
//               </div>

//               <div>
//                 <label className="block font-semibold mb-2">Subject *</label>
//                 <select
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                 >
//                   <option value="">Select a subject...</option>
//                   <option value="general">General Inquiry</option>
//                   <option value="booking">Booking Question</option>
//                   <option value="custom">Custom Tour Request</option>
//                   <option value="feedback">Feedback</option>
//                   <option value="complaint">Complaint</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block font-semibold mb-2">Message *</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                   placeholder="Tell us how we can help you..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {isSubmitting ? (
//                   "Sending..."
//                 ) : (
//                   <>
//                     Send Message
//                     <Send className="w-5 h-5" />
//                   </>
//                 )}
//               </button>

//               <p className="text-sm text-gray-500 text-center">
//                 By submitting this form, you agree to our privacy policy. We'll
//                 use your information only to respond to your inquiry.
//               </p>
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-12 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Find Us on the Map
//           </h2>
//           <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1751842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Office Location"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

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
    <div className="min-h-screen">
      <section
        className="relative py-16 px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1720260991024-ff5d17a0c4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#173d8c]/90 to-blue-900/90" />
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl"
          >
            We'd love to hear from you and help plan your perfect journey
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our tours? Want to customize your journey?
              Our team is here to help you create unforgettable memories.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#173d8c]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office Address</h3>
                  <p className="text-gray-600">
                    Jl. Sudirman No. 123
                    <br />
                    Jakarta Pusat 10220
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#173d8c]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+62 21 1234 5678</p>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#173d8c]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@gaurajourneys.com</p>
                  <p className="text-gray-600">support@gaurajourneys.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-[#173d8c]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Emergency Contact</h3>
              <p className="text-gray-600 mb-2">
                For urgent matters during tours, our 24/7 emergency hotline:
              </p>
              <p className="text-[#173d8c] font-bold text-xl">
                +62 811 9999 8888
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8 border border-gray-100"
          >
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-700">
                    Message sent successfully!
                  </p>
                  <p className="text-green-600 text-sm">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              </motion.div>
            )}

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-semibold mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#173d8c] focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#173d8c] focus:border-transparent outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#173d8c] focus:border-transparent outline-none"
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
                <label className="block font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#173d8c] focus:border-transparent outline-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#173d8c] text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We'll
                use your information only to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Find Us on the Map
          </h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24174312678!2d106.78918235!3d-6.229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e3fa87%3A0x401576d1459c280!2sJakarta%2C%20Special%20Capital%20Region%20of%20Jakarta!5e0!3m2!1sen!2sid!4v1714210000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
