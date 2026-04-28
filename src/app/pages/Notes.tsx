import { motion } from "framer-motion";
import {
  Info,
  AlertTriangle,
  CheckCircle,
  Luggage,
  FileText,
  Shield,
} from "lucide-react";
import { FAQAccordion } from "../components/ui/Faq";

const notes = [
  {
    icon: Info,
    title: "Important Travel Information",
    items: [
      "Valid passport required (minimum 6 months validity)",
      "Travel insurance is highly recommended",
      "Check visa requirements for your nationality",
      "Some destinations require vaccinations",
    ],
    color: "brand",
  },
  {
    icon: Luggage,
    title: "What to Pack",
    items: [
      "Comfortable walking shoes",
      "Light, breathable clothing",
      "Sun protection (hat, sunscreen, sunglasses)",
      "Insect repellent",
      "Personal medications",
      "Water bottle",
      "Camera and chargers",
    ],
    color: "green",
  },
  {
    icon: AlertTriangle,
    title: "Health & Safety",
    items: [
      "Stay hydrated in tropical climates",
      "Follow your guide's instructions at all times",
      "Inform us of any medical conditions or allergies",
      "Keep emergency contact numbers accessible",
      "Travel insurance covering medical emergencies is mandatory",
    ],
    color: "yellow",
  },
  {
    icon: FileText,
    title: "Booking Terms",
    items: [
      "Full payment required 30 days before departure",
      "Cancellations 30+ days before: 80% refund",
      "Cancellations 15-30 days before: 50% refund",
      "Cancellations less than 15 days: no refund",
      "We reserve the right to cancel tours due to insufficient bookings or safety concerns",
    ],
    color: "purple",
  },
  {
    icon: CheckCircle,
    title: "What's Included",
    items: [
      "Accommodation as specified in tour details",
      "Meals as mentioned in the itinerary",
      "Professional English-speaking guide",
      "All entrance fees and activities listed",
      "Private transportation during the tour",
    ],
    color: "brand",
  },
  {
    icon: Shield,
    title: "What's Not Included",
    items: [
      "International flights to/from Indonesia",
      "Personal expenses and souvenirs",
      "Tips for guides and drivers",
      "Travel insurance",
      "Additional activities not mentioned in itinerary",
      "Meals not specified in the program",
    ],
    color: "red",
  },
];

export const faqs = [
  {
    question: "How do I book a tour?",
    answer:
      "You can book directly through our website by selecting your desired tour package, filling in your details, and completing the payment. For custom tours, contact our customer service team.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 30+ days before departure receive an 80% refund, 15-30 days receive 50%, and less than 15 days are non-refundable. Please refer to our booking terms for full details.",
  },
  {
    question: "Are meals included in the tour?",
    answer:
      "Most of our packages include breakfast and some lunches. The specific meal inclusions are detailed in each tour package description.",
  },
  {
    question: "What size are your tour groups?",
    answer:
      "We maintain small group sizes for a more personalized experience, typically ranging from 4 to 15 participants depending on the tour.",
  },
  {
    question: "Do you offer private tours?",
    answer:
      "Yes! We can arrange private tours for individuals, families, or groups. Contact us for a customized quote.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer:
      "Please inform us of any dietary requirements when booking. We'll do our best to accommodate vegetarian, vegan, halal, and other special dietary needs.",
  },
];

const colorClasses = {
  brand: "bg-blue-50 text-[#173d8c] border-blue-100",
  green: "bg-green-50 text-green-600 border-green-100",
  yellow: "bg-yellow-50 text-yellow-600 border-yellow-100",
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  red: "bg-red-50 text-red-600 border-red-100",
};

export function Notes() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* HERO SECTION */}
      <section
        className="relative h-112.5 flex items-center justify-center bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-[#173d8c]/40 to-[#173d8c]/90" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
              Essential <span className="text-blue-400">Guidelines</span>
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-gray-100 font-light max-w-2xl mx-auto leading-relaxed">
              Everything you need to know before booking your Indonesian
              adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NOTES GRID */}
      <section className="relative -mt-12 py-12 px-4 max-w-7xl mx-auto z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {notes.map((note, index) => {
            const Icon = note.icon;
            return (
              <motion.div
                key={note.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${colorClasses[note.color as keyof typeof colorClasses]} border flex items-center justify-center mb-6`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {note.title}
                </h3>
                <ul className="space-y-3">
                  {note.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="text-blue-500 mt-1 shrink-0">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
        <FAQAccordion
          items={faqs}
          title="Frequently Asked Questions"
          subtitle="Quick answers to common inquiries about our services"
        />

        {/* FAQ SECTION */}
        <div className="max-w-4xl mx-auto">
          <div className="mt-8 p-8 bg-white rounded-3xl shadow-lg text-center border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Our travel specialists are available to assist you with any
              specific requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-[#173d8c] text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-800 hover:shadow-lg transition-all active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
