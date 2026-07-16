import { useEffect, useState } from "react";
import api from "../../services/api";

function ContactPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closePopup = () => {
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Only alphabets are allowed.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    setLoading(true);

    const response = await api.post("/contact/", formData);

    alert(response.data.message);

    setFormData({
      name: "",
      phone: "",
      email: "",
      requirement: "",
    });

    closePopup();
  } catch (error) {
    console.error(error);

    if (error.response) {
      alert("Submission failed. Please check your details.");
    } else {
      alert("Unable to connect to the server.");
    }
  } finally {
    setLoading(false);
  }
};

  if (!isOpen) return null;

  return (
            <div
            onClick={closePopup}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl animate-[popup_.35s_ease]"
            >
    
            {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-5 right-5 text-3xl text-gray-400 hover:text-gray-700 transition"
        >
          &times;
        </button>

        <div className="grid md:grid-cols-10">

          {/* Left Panel */}
          <div className="lg:col-span-2 bg-[var(--color-primary)] text-white p-8 flex flex-col justify-center">

            <h2 className="text-3xl font-bold leading-tight">
              Let's Build
              <br />
              Together
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/90">
              Need HR or Software Solutions?
              <br />
              We're just one step away.
            </p>

            <div className="mt-10 flex justify-center">
              <div className="text-7xl">
                💻
              </div>
            </div>

          </div>

          {/* Right Panel */}
          <div className="md:col-span-5 p-4">

            <h3 className="text-3xl font-bold text-[var(--color-text)]">
              Get In Touch
            </h3>

            <p className="mt-2 text-gray-500">
              Share your details and our team will contact you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >

              {/* Name & Phone */}
              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full rounded-lg border px-4 py-3 focus:outline-none ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[var(--color-primary)]"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="9876543210"
                    className={`w-full rounded-lg border px-4 py-3 focus:outline-none ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[var(--color-primary)]"
                    }`}
                  />

                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full rounded-lg border px-4 py-3 focus:outline-none ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[var(--color-primary)]"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Requirement */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Requirement
                </label>

                <textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Tell us briefly about your requirement..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-3 rounded-lg font-semibold transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                {loading ? "Submitting..." : "Submit"}
              </button>

              </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ContactPopup;