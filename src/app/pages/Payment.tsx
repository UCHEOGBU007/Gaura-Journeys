import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  CreditCard,
  Building2,
  Check,
  AlertCircle,
  ShieldCheck,
  Lock,
} from "lucide-react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_YOUR_PUBLISHABLE_KEY_HERE");

interface CheckoutFormProps {
  total: number;
}

function CheckoutForm({ total }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "bank">(
    "stripe",
  );
  const [paymentError, setPaymentError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleStripeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setPaymentError("");

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setIsProcessing(false);
      return;
    }

    try {
      const { error, paymentMethod: stripePaymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });

      if (error) {
        setPaymentError(error.message || "Payment failed");
        setIsProcessing(false);
      } else {
        setPaymentSuccess(true);
        setTimeout(() => navigate("/"), 3000);
      }
    } catch (err) {
      setPaymentError("An error occurred. Please try again.");
      setIsProcessing(false);
    }
  };

  const handleBankTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => navigate("/"), 5000);
  };

  if (paymentSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
      >
        <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-green-700">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-4">
          {paymentMethod === "stripe"
            ? "Your payment has been processed successfully via Stripe."
            : "Booking received. Please complete the bank transfer to finalize."}
        </p>
        <p className="text-gray-600">Redirecting to home page...</p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-4 mb-6">
        <button
          type="button"
          onClick={() => setPaymentMethod("stripe")}
          className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 border-2 ${
            paymentMethod === "stripe"
              ? "bg-[#173d8c] text-white border-[#173d8c]"
              : "bg-white text-gray-500 border-gray-100 hover:border-gray-200"
          }`}
        >
          <CreditCard className="w-5 h-5" />
          Card Payment
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod("bank")}
          className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 border-2 ${
            paymentMethod === "bank"
              ? "bg-[#173d8c] text-white border-[#173d8c]"
              : "bg-white text-gray-500 border-gray-100 hover:border-gray-200"
          }`}
        >
          <Building2 className="w-5 h-5" />
          Bank Transfer
        </button>
      </div>

      {paymentMethod === "stripe" ? (
        <form onSubmit={handleStripeSubmit}>
          <div className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <label className="block font-bold text-[#173d8c]">
                Secure Card Details
              </label>
              <div className="flex gap-3 grayscale opacity-70">
                <img
                  src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/master/flat/visa.svg"
                  alt="Visa"
                  className="h-6"
                />
                <img
                  src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/master/flat/mastercard.svg"
                  alt="Mastercard"
                  className="h-6"
                />
                <img
                  src="https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/master/flat/amex.svg"
                  alt="Amex"
                  className="h-6"
                />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-inner">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#173d8c",
                      fontFamily: "Inter, sans-serif",
                      "::placeholder": { color: "#94a3b8" },
                    },
                    invalid: { color: "#ef4444" },
                  },
                }}
              />
            </div>

            {/* --- STRIPE SECURITY INFO --- */}
            <div className="mt-6 flex items-center justify-center gap-3 py-3 border-t border-gray-200">
              <Lock className="w-4 h-4 text-[#635BFF]" />
              <span className="text-sm font-medium text-gray-600">
                Secured by{" "}
                <span className="text-[#635BFF] font-bold">stripe</span>
              </span>
              <div className="h-4 w-px bg-gray-300 mx-1" />
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                AES-256 Encryption
              </span>
            </div>
          </div>

          {paymentError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{paymentError}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className="w-full bg-[#173d8c] text-white py-4 px-6 rounded-lg font-bold hover:bg-[#123170] transition-all transform active:scale-[0.98] disabled:bg-gray-400 shadow-lg"
          >
            {isProcessing
              ? "Processing Securely..."
              : `Pay $${total.toLocaleString()}`}
          </button>
        </form>
      ) : (
        <form onSubmit={handleBankTransfer}>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6">
            <h3 className="font-bold mb-4 text-[#173d8c] flex items-center gap-2">
              <Building2 className="w-5 h-5" /> Transfer Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-blue-100 pb-2">
                <span className="text-gray-500">Bank Name</span>
                <span className="font-semibold text-gray-800">
                  Bank Mandiri
                </span>
              </div>
              <div className="flex justify-between border-b border-blue-100 pb-2">
                <span className="text-gray-500">Account Number</span>
                <span className="font-semibold text-gray-800 tracking-wider">
                  1234567890
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-gray-500">Total Amount</span>
                <span className="text-lg font-bold text-[#173d8c]">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#173d8c] text-white py-4 px-6 rounded-lg font-bold hover:bg-[#123170] transition-colors shadow-lg"
          >
            Confirm & Send Proof Later
          </button>
        </form>
      )}
    </div>
  );
}

export function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { trip, formData } = location.state || {};

  if (!trip || !formData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#173d8c]">
            No Active Session
          </h2>
          <button
            onClick={() => navigate("/book-reservation")}
            className="bg-[#173d8c] text-white px-6 py-2 rounded-lg"
          >
            Return to Booking
          </button>
        </div>
      </div>
    );
  }

  const total = trip.price * formData.participants;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* --- REFINED HERO SECTION --- */}
      <section
        className="relative py-28 px-4 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#173d8c]/95 to-[#173d8c]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-4xl mx-auto text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Encrypted Checkout
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Secure Payment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-blue-100/90 max-w-2xl mx-auto font-medium"
          >
            Finalize your reservation safely. Your payment data is never stored
            on our servers and is handled exclusively by Stripe.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 md:p-12"
            >
              <h2 className="text-2xl font-bold mb-8 text-[#173d8c]">
                Select Payment Method
              </h2>
              <Elements stripe={stripePromise}>
                <CheckoutForm total={total} />
              </Elements>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-24"
            >
              <h3 className="text-xl font-bold mb-6 text-[#173d8c] border-b pb-4">
                Trip Summary
              </h3>

              <div className="space-y-5 mb-8">
                <div>
                  <label className="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">
                    Selected Trip
                  </label>
                  <p className="text-lg font-bold text-gray-800">{trip.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                  <div>
                    <label className="text-[10px] uppercase text-gray-400 font-bold">
                      Travelers
                    </label>
                    <p className="font-semibold text-gray-700">
                      {formData.participants} Person(s)
                    </p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase text-gray-400 font-bold">
                      Date
                    </label>
                    <p className="font-semibold text-gray-700">
                      {formData.date}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t-4 border-[#173d8c]">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-gray-500 text-sm">
                      Total Amount Due
                    </span>
                    <span className="font-black text-3xl text-[#173d8c]">
                      ${total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                <p className="text-sm font-bold text-[#173d8c] mb-2 uppercase tracking-wide">
                  Guest Details
                </p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>
                    <strong>Name:</strong> {formData.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
