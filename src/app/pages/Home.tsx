import { useEffect, useRef, useState } from "react"; // Added useState
import { Link } from "react-router";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence, // Added for smooth transitions
} from "framer-motion";
import {
  MapPin,
  Clock,
  Users,
  Star,
  Shield,
  Heart,
  Award,
  Compass,
  TrendingUp,
  Globe,
} from "lucide-react";
import { FAQAccordion } from "../components/ui/Faq";
import { faqs } from "./Notes";

// --- Hero Slides Data ---
const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1743836778881-73a675b2f8c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    title: "Discover Indonesia's Hidden Gems",
    description:
      "Experience unforgettable journeys through pristine islands, ancient temples, and vibrant cultures.",
  },
  {
    image: "Public/Bali2.jpeg",
    title: "Escape to Paradise in Bali",
    description:
      "Unwind on Bali's stunning beaches, explore vibrant culture, and immerse yourself in unforgettable experiences.",
  },
  {
    image: "Public/sumatera.jpeg",
    title: "Witness the Majesty Lake  of Toba, Sumatera",
    description:
      " Experience the awe-inspiring beauty of Lake Toba, the largest volcanic lake in the world, surrounded by lush hills and traditional Batak culture.",
  },
  {
    image: "Public/Kintamani.jpeg",
    title: "A Volcanic Adventure in Kintamani",
    description:
      "Explore the dramatic landscapes of an active volcano and its serene crater lake in Bali's highlands.",
  },
];

// --- TypeScript Interface for Counter Props ---
interface CounterProps {
  value: number;
  duration?: number;
}

// --- Animated Counter Component ---
function Counter({ value, duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString(),
  );
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [motionValue, value, isInView, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// ... (destinations, featuredTours, testimonials, whyChooseUs arrays remain unchanged)
const destinations = [
  {
    name: "Sumatera",
    image:
      "https://images.unsplash.com/photo-1674648569143-1a8cab4ef60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description: "Volcanic landscapes and lush rainforests",
  },
  {
    name: "Jawa",
    image:
      "https://images.unsplash.com/photo-1620549146260-938c38c31c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description: "Ancient temples and cultural heritage",
  },
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1662950267280-0cdf5f7139b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description: "Paradise beaches and spiritual retreats",
  },
  {
    name: "Banggai",
    image:
      "https://images.unsplash.com/photo-1729605410855-34aca6786323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description: "Pristine islands and coral reefs",
  },
  {
    name: "Labuan Bajo",
    image:
      "https://images.unsplash.com/photo-1698093185273-551148a76898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description: "Gateway to Komodo National Park",
  },
];

const featuredTours = [
  {
    title: "Bali Cultural Experience",
    duration: "5 Days / 4 Nights",
    price: "$850",
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1671223450846-29e05a32366d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Komodo Adventure",
    duration: "4 Days / 3 Nights",
    price: "$750",
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1726296705138-da985197f80f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    title: "Java Temple Tour",
    duration: "6 Days / 5 Nights",
    price: "$950",
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1620549146396-9024d914cd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "United States",
    rating: 5,
    text: "Amazing experience! The guides were knowledgeable and friendly. Bali exceeded all my expectations.",
    tour: "Bali Cultural Experience",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Seeing the Komodo dragons up close was a dream come true. Well-organized tour with stunning views.",
    tour: "Komodo Adventure",
  },
  {
    name: "Emma Wilson",
    location: "Australia",
    rating: 5,
    text: "The Borobudur sunrise was breathtaking. Every moment was perfectly planned. Highly recommend!",
    tour: "Java Temple Tour",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Licensed guides and comprehensive insurance for your peace of mind",
  },
  {
    icon: Award,
    title: "Award Winning",
    description:
      "Recognized as Indonesia's top tour operator for 5 consecutive years",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description:
      "Tailored experiences designed around your interests and preferences",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description:
      "Deep knowledge of hidden gems and authentic cultural experiences",
  },
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Logic to change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${heroSlides[currentSlide].image}')`,
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center text-white px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                {heroSlides[currentSlide].description}
              </p>
              <Link
                to="/tour-areas"
                className="text-xl inline-block bg-white text-[#173d8c] px-8 py-4 rounded-lg font-extrabold hover:bg-gray-300 hover:cursor-pointer hover:shadow-2xl transition-colors"
              >
                Explore Tours
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- Rest of the components remain exactly as they were --- */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 text-lg">
            Choose from our carefully selected tour locations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to="/tour-areas">
                <div className="relative h-64 rounded-lg overflow-hidden mb-3">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{dest.name}</h3>
                    <p className="text-sm text-gray-200">{dest.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Tours</h2>
            <p className="text-gray-600 text-lg">
              Handpicked adventures for an unforgettable experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{tour.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span>
                        {tour.rating} ({tour.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#173d8c]">
                      {tour.price}
                    </span>
                    <Link
                      to="/book-reservation"
                      className="bg-[#173d8c] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Gaura Journeys</h2>
          <p className="text-gray-600 text-lg">
            Your trusted partner for authentic Indonesian adventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-[#173d8c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#173d8c]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 text-lg">
              Real experiences from real adventurers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                  <p className="text-[#173d8c] text-sm mt-1">
                    {testimonial.tour}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-linear-to-r from-[#949596] to-blue-200 text-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-[#173d8c]" />
              <p className="text-5xl font-extrabold mb-2 text-[#173d8c]">
                <Counter value={15} />+
              </p>
              <p className="text-lg font-semibold">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Users className="w-12 h-12 mx-auto mb-3 text-[#173d8c]" />
              <p className="text-5xl font-extrabold mb-2 text-[#173d8c]">
                <Counter value={50000} />+
              </p>
              <p className="text-lg font-semibold">Happy Travelers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Compass className="w-12 h-12 mx-auto mb-3 text-[#173d8c]" />
              <p className="text-5xl font-extrabold mb-2 text-[#173d8c]">
                <Counter value={100} />+
              </p>
              <p className="text-lg font-semibold">Tour Packages</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Star className="w-12 h-12 mx-auto mb-3 text-[#173d8c] fill-[#173d8c]" />
              <p className="text-5xl font-extrabold mb-2 text-[#173d8c]">
                4.9/5
              </p>
              <p className="text-lg font-semibold">Average Rating</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-16 px-4 max-w-7xl mx-auto">
        <FAQAccordion
          items={faqs}
          title="Frequently Asked Questions"
          subtitle="Quick answers to common inquiries about our services"
        />
      </div>

      <section
        className="relative py-24 px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1776347563841-ae3781d74f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8">
              Book your dream Indonesian journey today and create memories that
              last a lifetime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-reservation"
                className="bg-[#173d8c] text-white px-8 py-4 rounded-lg font-extrabold hover:opacity-90 transition-opacity"
              >
                Book Now
              </Link>
              <Link
                to="/contact"
                className="bg-white text-[#173d8c] px-8 py-4 rounded-lg font-extrabold hover:bg-gray-200 hover:shadow-2xl transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
