// import { useState } from "react";
// import { Link } from "react-router";
// import { motion } from "motion/react";
// import { MapPin, Clock, Users, DollarSign, Star } from "lucide-react";

// const tourAreas = [
//   {
//     id: "sumatera",
//     name: "Sumatera",
//     description:
//       "Explore the wild beauty of Sumatera with its volcanic landscapes, pristine rainforests, and unique wildlife including orangutans and tigers.",
//     image:
//       "https://images.unsplash.com/photo-1674648569143-1a8cab4ef60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
//     tours: [
//       {
//         title: "Lake Toba Discovery",
//         duration: "4 Days / 3 Nights",
//         price: "$680",
//         groupSize: "6-12",
//         rating: 4.7,
//         highlights: ["Volcanic lake", "Batak culture", "Traditional villages"],
//       },
//       {
//         title: "Bukittinggi Highland Adventure",
//         duration: "3 Days / 2 Nights",
//         price: "$550",
//         groupSize: "4-10",
//         rating: 4.6,
//         highlights: ["Ngarai Sianok", "Minangkabau culture", "Harau Valley"],
//       },
//     ],
//   },
//   {
//     id: "jawa",
//     name: "Jawa",
//     description:
//       "Discover the cultural heart of Indonesia with ancient temples, vibrant cities, and stunning volcanic landscapes.",
//     image:
//       "https://images.unsplash.com/photo-1620549146396-9024d914cd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
//     tours: [
//       {
//         title: "Borobudur & Prambanan Temple Tour",
//         duration: "3 Days / 2 Nights",
//         price: "$520",
//         groupSize: "8-15",
//         rating: 4.9,
//         highlights: [
//           "Borobudur sunrise",
//           "Prambanan complex",
//           "Yogyakarta culture",
//         ],
//       },
//       {
//         title: "Mount Bromo Sunrise Trek",
//         duration: "2 Days / 1 Night",
//         price: "$380",
//         groupSize: "6-12",
//         rating: 4.8,
//         highlights: ["Sunrise viewpoint", "Volcanic crater", "Sea of sand"],
//       },
//     ],
//   },
//   {
//     id: "bali",
//     name: "Bali",
//     description:
//       "Experience paradise with pristine beaches, ancient temples, terraced rice paddies, and world-class diving.",
//     image:
//       "https://images.unsplash.com/photo-1679250484940-09d2670cdad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
//     tours: [
//       {
//         title: "Bali Cultural Highlights",
//         duration: "5 Days / 4 Nights",
//         price: "$850",
//         groupSize: "6-12",
//         rating: 4.8,
//         highlights: [
//           "Ubud rice terraces",
//           "Tanah Lot temple",
//           "Traditional dance",
//         ],
//       },
//       {
//         title: "Bali Beach & Diving",
//         duration: "6 Days / 5 Nights",
//         price: "$980",
//         groupSize: "4-8",
//         rating: 4.9,
//         highlights: [
//           "Nusa Penida diving",
//           "Beach relaxation",
//           "Uluwatu temple",
//         ],
//       },
//     ],
//   },
//   {
//     id: "banggai",
//     name: "Banggai",
//     description:
//       "Venture to the remote Banggai Islands for pristine coral reefs, endemic wildlife, and untouched natural beauty.",
//     image:
//       "https://images.unsplash.com/photo-1729605410855-34aca6786323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
//     tours: [
//       {
//         title: "Banggai Islands Explorer",
//         duration: "7 Days / 6 Nights",
//         price: "$1,450",
//         groupSize: "4-8",
//         rating: 4.9,
//         highlights: [
//           "Island hopping",
//           "Snorkeling paradise",
//           "Endemic cardinalfish",
//         ],
//       },
//     ],
//   },
//   {
//     id: "labuan-bajo",
//     name: "Labuan Bajo",
//     description:
//       "Gateway to Komodo National Park, home to the legendary Komodo dragons and some of the world's best diving spots.",
//     image:
//       "https://images.unsplash.com/photo-1698093185273-551148a76898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
//     tours: [
//       {
//         title: "Komodo Dragon Adventure",
//         duration: "4 Days / 3 Nights",
//         price: "$1,200",
//         groupSize: "6-10",
//         rating: 4.9,
//         highlights: ["Komodo dragons", "Pink beach", "Padar Island viewpoint"],
//       },
//       {
//         title: "Komodo Liveaboard Diving",
//         duration: "5 Days / 4 Nights",
//         price: "$1,650",
//         groupSize: "8-12",
//         rating: 5.0,
//         highlights: [
//           "World-class diving",
//           "Manta rays",
//           "Underwater photography",
//         ],
//       },
//     ],
//   },
// ];

// export function TourAreas() {
//   const [selectedArea, setSelectedArea] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen">
//       <section
//         className="relative py-16 px-4 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1699862915984-9d81ce41e433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
//         }}
//       >
//         <div className="absolute inset-0 bg-linear-to-r from-teal-600/90 to-blue-600/90" />
//         <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             Explore Our Tour Areas
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-xl"
//           >
//             Choose from five incredible destinations across Indonesia
//           </motion.p>
//         </div>
//       </section>

//       <section className="py-12 px-4 max-w-7xl mx-auto">
//         <div className="flex flex-wrap gap-3 justify-center mb-12">
//           {tourAreas.map((area) => (
//             <button
//               key={area.id}
//               onClick={() =>
//                 setSelectedArea(selectedArea === area.id ? null : area.id)
//               }
//               className={`px-6 py-3 rounded-full transition-all ${
//                 selectedArea === area.id
//                   ? "bg-teal-600 text-white shadow-lg"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {area.name}
//             </button>
//           ))}
//         </div>

//         <div className="space-y-16">
//           {tourAreas
//             .filter((area) => !selectedArea || area.id === selectedArea)
//             .map((area, areaIndex) => (
//               <motion.div
//                 key={area.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: areaIndex * 0.1 }}
//               >
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//                   <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
//                     <img
//                       src={area.image}
//                       alt={area.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex flex-col justify-center">
//                     <h2 className="text-3xl font-bold mb-4">{area.name}</h2>
//                     <p className="text-gray-600 text-lg mb-6">
//                       {area.description}
//                     </p>
//                     <div className="flex items-center gap-2 text-teal-600">
//                       <MapPin className="w-5 h-5" />
//                       <span>
//                         {area.tours.length} tour package
//                         {area.tours.length > 1 ? "s" : ""} available
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {area.tours.map((tour, tourIndex) => (
//                     <motion.div
//                       key={tour.title}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: areaIndex * 0.1 + tourIndex * 0.1 }}
//                       className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//                     >
//                       <div className="p-6">
//                         <h3 className="text-xl font-bold mb-3">{tour.title}</h3>

//                         <div className="space-y-2 mb-4">
//                           <div className="flex items-center gap-2 text-gray-600">
//                             <Clock className="w-5 h-5" />
//                             <span>{tour.duration}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-600">
//                             <Users className="w-5 h-5" />
//                             <span>{tour.groupSize} people</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-600">
//                             <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
//                             <span>{tour.rating} rating</span>
//                           </div>
//                         </div>

//                         <div className="mb-4">
//                           <h4 className="font-semibold mb-2">Highlights:</h4>
//                           <ul className="space-y-1">
//                             {tour.highlights.map((highlight) => (
//                               <li
//                                 key={highlight}
//                                 className="text-gray-600 text-sm flex items-start gap-2"
//                               >
//                                 <span className="text-teal-600 mt-1">•</span>
//                                 <span>{highlight}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div className="flex items-center justify-between pt-4 border-t">
//                           <div className="flex items-center gap-1 text-2xl font-bold text-teal-600">
//                             <DollarSign className="w-6 h-6" />
//                             <span>{tour.price.replace("$", "")}</span>
//                           </div>
//                           <Link
//                             to="/book-reservation"
//                             className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
//                           >
//                             Book Now
//                           </Link>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { MapPin, Clock, Users, DollarSign, Star } from "lucide-react";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

const tourAreas = [
  {
    id: "sumatera",
    name: "Sumatera",
    description:
      "Explore the wild beauty of Sumatera with its volcanic landscapes, pristine rainforests, and unique wildlife.",
    images: [
      "public/sumatera.jpeg",
      "public/sumatera2.jpeg",
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1674648569143-1a8cab4ef60c?q=80&w=1200&auto=format",
    ],
    tours: [
      {
        title: "Lake Toba Discovery",
        duration: "4 Days / 3 Nights",
        price: "$680",
        groupSize: "6-12",
        rating: 4.7,
        highlights: ["Volcanic lake", "Batak culture", "Traditional villages"],
      },
      {
        title: "Bukittinggi Highland Adventure",
        duration: "3 Days / 2 Nights",
        price: "$550",
        groupSize: "4-10",
        rating: 4.6,
        highlights: ["Ngarai Sianok", "Minangkabau culture", "Harau Valley"],
      },
    ],
  },
  {
    id: "jawa",
    name: "Jawa",
    description:
      "Discover the cultural heart of Indonesia with ancient temples, vibrant cities, and stunning volcanic landscapes.",
    images: [
      "https://images.unsplash.com/photo-1620549146396-9024d914cd99?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=1200&auto=format",
    ],
    tours: [
      {
        title: "Borobudur & Prambanan Temple Tour",
        duration: "3 Days / 2 Nights",
        price: "$520",
        groupSize: "8-15",
        rating: 4.9,
        highlights: [
          "Borobudur sunrise",
          "Prambanan complex",
          "Yogyakarta culture",
        ],
      },
      {
        title: "Mount Bromo Sunrise Trek",
        duration: "2 Days / 1 Night",
        price: "$380",
        groupSize: "6-12",
        rating: 4.8,
        highlights: ["Sunrise viewpoint", "Volcanic crater", "Sea of sand"],
      },
    ],
  },
  {
    id: "bali",
    name: "Bali",
    description:
      "Experience paradise with pristine beaches, ancient temples, terraced rice paddies, and world-class diving.",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ca2?q=80&w=1200&auto=format",
    ],
    tours: [
      {
        title: "Bali Cultural Highlights",
        duration: "5 Days / 4 Nights",
        price: "$850",
        groupSize: "6-12",
        rating: 4.8,
        highlights: [
          "Ubud rice terraces",
          "Tanah Lot temple",
          "Traditional dance",
        ],
      },
      {
        title: "Bali Beach & Diving",
        duration: "6 Days / 5 Nights",
        price: "$980",
        groupSize: "4-8",
        rating: 4.9,
        highlights: [
          "Nusa Penida diving",
          "Beach relaxation",
          "Uluwatu temple",
        ],
      },
    ],
  },
  {
    id: "banggai",
    name: "Banggai",
    description:
      "Venture to the remote Banggai Islands for pristine coral reefs, endemic wildlife, and untouched natural beauty.",
    images: [
      "https://images.unsplash.com/photo-1729605410855-34aca6786323?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=1200&auto=format",
    ],
    tours: [
      {
        title: "Banggai Islands Explorer",
        duration: "7 Days / 6 Nights",
        price: "$1,450",
        groupSize: "4-8",
        rating: 4.9,
        highlights: [
          "Island hopping",
          "Snorkeling paradise",
          "Endemic cardinalfish",
        ],
      },
    ],
  },
  {
    id: "labuan-bajo",
    name: "Labuan Bajo",
    description:
      "Gateway to Komodo National Park, home to the legendary Komodo dragons and world-best diving spots.",
    images: [
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1698093185273-551148a76898?q=80&w=1200&auto=format",
      "https://images.unsplash.com/photo-1590559063891-68df1e99af73?q=80&w=1200&auto=format",
    ],
    tours: [
      {
        title: "Komodo Dragon Adventure",
        duration: "4 Days / 3 Nights",
        price: "$1,200",
        groupSize: "6-10",
        rating: 4.9,
        highlights: ["Komodo dragons", "Pink beach", "Padar Island viewpoint"],
      },
      {
        title: "Komodo Liveaboard Diving",
        duration: "5 Days / 4 Nights",
        price: "$1,650",
        groupSize: "8-12",
        rating: 5.0,
        highlights: [
          "World-class diving",
          "Manta rays",
          "Underwater photography",
        ],
      },
    ],
  },
];

export function TourAreas() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax-style Background */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-700 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?q=80&w=1920&auto=format')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#173d8c]/80 via-[#173d8c]/60 to-gray-50" />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Explore Our Tour Areas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light opacity-90"
          >
            Unforgettable journeys through the Indonesian archipelago
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          <button
            onClick={() => setSelectedArea(null)}
            className={`px-8 py-3 rounded-full font-medium transition-all ${
              !selectedArea
                ? "bg-[#173d8c] text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            All Destinations
          </button>
          {tourAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setSelectedArea(area.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                selectedArea === area.id
                  ? "bg-[#173d8c] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {area.name}
            </button>
          ))}
        </div>

        <div className="space-y-24">
          {tourAreas
            .filter((area) => !selectedArea || area.id === selectedArea)
            .map((area, areaIndex) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10 items-center">
                  {/* Swiper Image Carousel */}
                  <div className="relative h-100 lg:h-125 rounded-2xl overflow-hidden shadow-2xl">
                    <Swiper
                      spaceBetween={0}
                      centeredSlides={true}
                      effect={"fade"}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay, EffectFade]}
                      className="h-full w-full"
                    >
                      {area.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <img
                            src={img}
                            alt={`${area.name} view ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[#173d8c] font-semibold tracking-widest uppercase text-sm mb-2">
                      Destination
                    </span>
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">
                      {area.name}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {area.description}
                    </p>
                    <div className="flex items-center gap-3 text-[#173d8c] bg-blue-50 w-fit px-4 py-2 rounded-lg">
                      <MapPin className="w-5 h-5" />
                      <span className="font-medium">
                        {area.tours.length} Exclusive Package
                        {area.tours.length > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tour Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {area.tours.map((tour, tourIndex) => (
                    <motion.div
                      key={tour.title}
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                    >
                      <div className="p-8">
                        <h3 className="text-xl font-bold mb-4 text-gray-800 h-14 line-clamp-2">
                          {tour.title}
                        </h3>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-gray-500">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">
                              {tour.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-500">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">
                              {tour.groupSize} Travelers
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-500">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-medium">
                              {tour.rating} / 5.0 Rating
                            </span>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-3">
                            Highlights
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {tour.highlights.map((h) => (
                              <span
                                key={h}
                                className="text-[11px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium"
                              >
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                          <div>
                            <span className="text-gray-400 text-xs block uppercase">
                              From
                            </span>
                            <div className="flex items-center text-2xl font-bold text-[#173d8c]">
                              <DollarSign className="w-5 h-5" />
                              <span>{tour.price.replace("$", "")}</span>
                            </div>
                          </div>
                          <Link
                            to="/book-reservation"
                            className="bg-[#173d8c] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors shadow-md"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
}
