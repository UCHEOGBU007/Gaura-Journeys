import { Link } from "react-router";
import { Home, Search } from "lucide-react";
import { motion } from "motion/react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-teal-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-8"
        >
          <Search className="w-24 h-24 text-teal-600 mx-auto mb-4" />
          <h1 className="text-9xl font-bold text-teal-600 mb-4">404</h1>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Oops! Looks like you've wandered off the beaten path. The page you're
          looking for doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to="/tour-areas"
            className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Explore Tours
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
