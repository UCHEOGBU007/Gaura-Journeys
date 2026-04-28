// import { useState } from "react";
// import { useNavigate } from "react-router";
// import { motion } from "motion/react";
// import { Package, MessageCircle, ArrowRight } from "lucide-react";

// const fixedTrips = [
//   {
//     id: "bali-culture",
//     name: "Bali Cultural Experience",
//     destination: "Bali",
//     duration: "5 Days / 4 Nights",
//     price: 850,
//     description:
//       "Explore Bali's temples, rice terraces, and traditional culture",
//     includes: ["Accommodation", "Meals", "Transport", "Guide", "Activities"],
//   },
//   {
//     id: "komodo-adventure",
//     name: "Komodo Dragon Adventure",
//     destination: "Labuan Bajo",
//     duration: "4 Days / 3 Nights",
//     price: 1200,
//     description: "See Komodo dragons and explore stunning islands",
//     includes: ["Accommodation", "Meals", "Boat trips", "Guide", "Park fees"],
//   },
//   {
//     id: "java-temple",
//     name: "Java Temple Tour",
//     destination: "Jawa",
//     duration: "6 Days / 5 Nights",
//     price: 950,
//     description: "Visit Borobudur, Prambanan, and Mount Bromo",
//     includes: ["Accommodation", "Meals", "Transport", "Guide", "Entrance fees"],
//   },
//   {
//     id: "lake-toba",
//     name: "Lake Toba Discovery",
//     destination: "Sumatera",
//     duration: "4 Days / 3 Nights",
//     price: 680,
//     description: "Discover the volcanic lake and Batak culture",
//     includes: ["Accommodation", "Meals", "Transport", "Guide", "Activities"],
//   },
//   {
//     id: "banggai-islands",
//     name: "Banggai Islands Explorer",
//     destination: "Banggai",
//     duration: "7 Days / 6 Nights",
//     price: 1450,
//     description: "Explore pristine islands and coral reefs",
//     includes: ["Accommodation", "Meals", "Boat trips", "Guide", "Snorkeling"],
//   },
// ];

// export function BookReservation() {
//   const navigate = useNavigate();
//   const [bookingType, setBookingType] = useState<"fixed" | "combination">(
//     "fixed",
//   );
//   const [selectedTrip, setSelectedTrip] = useState<string>("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     participants: 1,
//     date: "",
//     message: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFixedTripSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!selectedTrip) {
//       alert("Please select a trip package");
//       return;
//     }
//     const trip = fixedTrips.find((t) => t.id === selectedTrip);
//     navigate("/payment", { state: { trip, formData } });
//   };

//   const handleCombinationSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     window.location.href =
//       "https://wa.me/621234567890?text=Hi, I'd like to create a custom tour package";
//   };

//   return (
//     <div className="min-h-screen">
//       <section
//         className="relative py-16 px-4 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1771722285883-31eaf657dd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
//         }}
//       >
//         <div className="absolute inset-0 bg-linear-to-r from-teal-600/90 to-blue-600/90" />
//         <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             Book Your Journey
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-xl"
//           >
//             Choose a fixed package or create your custom adventure
//           </motion.p>
//         </div>
//       </section>

//       <section className="py-12 px-4 max-w-4xl mx-auto">
//         <div className="flex gap-4 mb-8">
//           <button
//             onClick={() => setBookingType("fixed")}
//             className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
//               bookingType === "fixed"
//                 ? "bg-teal-600 text-white shadow-lg"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             <Package className="w-6 h-6 inline-block mr-2" />
//             Fixed Trip Packages
//           </button>
//           <button
//             onClick={() => setBookingType("combination")}
//             className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
//               bookingType === "combination"
//                 ? "bg-teal-600 text-white shadow-lg"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             <MessageCircle className="w-6 h-6 inline-block mr-2" />
//             Custom Combination
//           </button>
//         </div>

//         {bookingType === "fixed" ? (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white rounded-lg shadow-lg p-8"
//           >
//             <h2 className="text-2xl font-bold mb-6">
//               Book a Fixed Trip Package
//             </h2>

//             <form onSubmit={handleFixedTripSubmit} className="space-y-6">
//               <div>
//                 <label className="block font-semibold mb-2">
//                   Select Trip Package *
//                 </label>
//                 <select
//                   value={selectedTrip}
//                   onChange={(e) => setSelectedTrip(e.target.value)}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                 >
//                   <option value="">Choose a package...</option>
//                   {fixedTrips.map((trip) => (
//                     <option key={trip.id} value={trip.id}>
//                       {trip.name} - ${trip.price} ({trip.duration})
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {selectedTrip && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   className="bg-gray-50 p-4 rounded-lg"
//                 >
//                   {fixedTrips.find((t) => t.id === selectedTrip) && (
//                     <div>
//                       <h3 className="font-bold mb-2">Package Details:</h3>
//                       <p className="text-gray-600 mb-3">
//                         {
//                           fixedTrips.find((t) => t.id === selectedTrip)
//                             ?.description
//                         }
//                       </p>
//                       <div className="flex flex-wrap gap-2">
//                         {fixedTrips
//                           .find((t) => t.id === selectedTrip)
//                           ?.includes.map((item) => (
//                             <span
//                               key={item}
//                               className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
//                             >
//                               {item}
//                             </span>
//                           ))}
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               )}

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block font-semibold mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block font-semibold mb-2">Email *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block font-semibold mb-2">Phone *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                     placeholder="+62 123 456 7890"
//                   />
//                 </div>

//                 <div>
//                   <label className="block font-semibold mb-2">
//                     Number of Participants *
//                   </label>
//                   <input
//                     type="number"
//                     name="participants"
//                     value={formData.participants}
//                     onChange={handleInputChange}
//                     min="1"
//                     max="20"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block font-semibold mb-2">
//                     Preferred Date *
//                   </label>
//                   <input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block font-semibold mb-2">
//                     Additional Message
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows={4}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                     placeholder="Any special requests or questions?"
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
//               >
//                 Proceed to Payment
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </form>
//           </motion.div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white rounded-lg shadow-lg p-8"
//           >
//             <h2 className="text-2xl font-bold mb-6">Create Your Custom Tour</h2>

//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
//               <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">
//                 Contact Our Travel Specialists
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 Want to create a custom itinerary combining multiple
//                 destinations? Our travel experts will help you design the
//                 perfect journey tailored to your preferences.
//               </p>
//             </div>

//             <form onSubmit={handleCombinationSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block font-semibold mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block font-semibold mb-2">Email *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block font-semibold mb-2">Phone *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                     placeholder="+62 123 456 7890"
//                   />
//                 </div>

//                 <div>
//                   <label className="block font-semibold mb-2">
//                     Number of Participants *
//                   </label>
//                   <input
//                     type="number"
//                     name="participants"
//                     value={formData.participants}
//                     onChange={handleInputChange}
//                     min="1"
//                     max="20"
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block font-semibold mb-2">
//                     Describe Your Ideal Tour *
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                     placeholder="Tell us about your dream tour: which destinations interest you, how long you'd like to travel, your budget range, special interests, etc."
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
//               >
//                 Contact Customer Service
//                 <MessageCircle className="w-5 h-5" />
//               </button>
//             </form>
//           </motion.div>
//         )}
//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Package, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

// --- Types ---
interface Trip {
  id: string;
  name: string;
  destination: string;
  duration: string;
  price: number;
  description: string;
  includes: string[];
}

// --- Data ---
const fixedTrips: Trip[] = [
  {
    id: "bali-culture",
    name: "Bali Cultural Experience",
    destination: "Bali",
    duration: "5 Days / 4 Nights",
    price: 850,
    description:
      "Explore Bali's temples, rice terraces, and traditional culture",
    includes: ["Accommodation", "Meals", "Transport", "Guide", "Activities"],
  },
  {
    id: "komodo-adventure",
    name: "Komodo Dragon Adventure",
    destination: "Labuan Bajo",
    duration: "4 Days / 3 Nights",
    price: 1200,
    description: "See Komodo dragons and explore stunning islands",
    includes: ["Accommodation", "Meals", "Boat trips", "Guide", "Park fees"],
  },
  {
    id: "java-tempole",
    name: "Java Temple Tour",
    destination: "Jawa",
    duration: "6 Days / 5 Nights",
    price: 950,
    description: "Visit Borobudur, Prambanan, and Mount Bromo",
    includes: ["Accommodation", "Meals", "Transport", "Guide", "Entrance fees"],
  },
  {
    id: "lake-toba",
    name: "Lake Toba Discovery",
    destination: "Sumatera",
    duration: "4 Days / 3 Nights",
    price: 680,
    description: "Discover the volcanic lake and Batak culture",
    includes: ["Accommodation", "Meals", "Transport", "Guide", "Activities"],
  },
  {
    id: "banggai-islands",
    name: "Banggai Islands Explorer",
    destination: "Banggai",
    duration: "7 Days / 6 Nights",
    price: 1450,
    description: "Explore pristine islands and coral reefs",
    includes: ["Accommodation", "Meals", "Boat trips", "Guide", "Snorkeling"],
  },
];

export function BookReservation() {
  const navigate = useNavigate();
  const [bookingType, setBookingType] = useState<"fixed" | "combination">(
    "fixed",
  );
  const [selectedTripId, setSelectedTripId] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    participants: 1,
    date: "",
    message: "",
  });

  // Derived state for the selected trip object
  const selectedTrip = fixedTrips.find((t: Trip) => t.id === selectedTripId);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFixedTripSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTripId) {
      alert("Please select a trip package");
      return;
    }
    navigate("/payment", { state: { trip: selectedTrip, formData } });
  };

  const handleCombinationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hi, I'd like to create a custom tour package.\nName: ${formData.name}\nParticipants: ${formData.participants}\nDetails: ${formData.message}`,
    );
    window.location.href = `https://wa.me/621234567890?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* PROFESSIONAL HERO SECTION */}
      <section
        className="relative h-112.5 flex items-center justify-center bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-[#173d8c]/50 to-[#173d8c]/80" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-blue-600 rounded-full">
              Adventure Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
              Book Your <span className="text-blue-400">Journey</span>
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed">
              Experience Indonesia like never before. Choose a signature package
              or let our specialists craft a unique itinerary just for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM CONTAINER */}
      <section className="relative -mt-16 pb-20 px-4 max-w-4xl mx-auto z-20">
        {/* Toggle Buttons */}
        <div className="flex gap-2 p-1.5 mb-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
          <button
            onClick={() => setBookingType("fixed")}
            className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
              bookingType === "fixed"
                ? "bg-[#173d8c] text-white shadow-lg scale-102"
                : "bg-transparent text-gray-500 hover:text-[#173d8c] hover:bg-gray-100"
            }`}
          >
            <Package className="w-5 h-5" />
            Fixed Packages
          </button>
          <button
            onClick={() => setBookingType("combination")}
            className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
              bookingType === "combination"
                ? "bg-[#173d8c] text-white shadow-lg scale-102"
                : "bg-transparent text-gray-500 hover:text-[#173d8c] hover:bg-gray-100"
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            Custom Tour
          </button>
        </div>

        <AnimatePresence mode="wait">
          {bookingType === "fixed" ? (
            <motion.div
              key="fixed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Reservation Details
              </h2>
              <form onSubmit={handleFixedTripSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Select Trip Package
                  </label>
                  <select
                    value={selectedTripId}
                    onChange={(e) => setSelectedTripId(e.target.value)}
                    required
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all cursor-pointer"
                  >
                    <option value="">View Available Packages...</option>
                    {fixedTrips.map((trip) => (
                      <option key={trip.id} value={trip.id}>
                        {trip.name} — ${trip.price} ({trip.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {selectedTrip && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5"
                  >
                    <h3 className="text-[#173d8c] font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Package Highlights:
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed italic">
                      "{selectedTrip.description}"
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrip.includes.map((item) => (
                        <span
                          key={item}
                          className="bg-white text-[#173d8c] px-3 py-1 rounded-lg text-xs font-bold border border-blue-100 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                      placeholder="+62 ..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                      Participants
                    </label>
                    <input
                      type="number"
                      name="participants"
                      value={formData.participants}
                      onChange={handleInputChange}
                      min="1"
                      max="20"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#173d8c] text-white py-5 rounded-2xl font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20"
                >
                  Proceed to Payment
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="custom"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
            >
              <div className="bg-linear-to-br from-[#173d8c] to-blue-600 rounded-2xl p-6 mb-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      Tailor-Made Itinerary
                    </h3>
                    <p className="text-blue-100 text-sm">
                      Our specialists will contact you within 24 hours to design
                      your dream journey.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleCombinationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                      Participants
                    </label>
                    <input
                      type="number"
                      name="participants"
                      value={formData.participants}
                      onChange={handleInputChange}
                      min="1"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                      Tell us about your dream tour
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                      placeholder="Destinations, interests, budget, or specific dates..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#173d8c] text-white py-5 rounded-2xl font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20"
                >
                  Connect via WhatsApp
                  <MessageCircle className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
