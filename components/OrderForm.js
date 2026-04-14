"use client";

import { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    email: "",
    contactNumber: "",
    addressPostcode: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="order" className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="font-playfair text-4xl md:text-5xl font-bold text-brown mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to order?
            </h2>
            <p className="text-brown-light text-base leading-relaxed">
              Planning a celebration, café restock, or special event? Share your details below and we&apos;ll help you
              choose the best options for your date, quantity, and budget.
            </p>
            <p className="text-brown-light text-base leading-relaxed mt-4">
              Every enquiry is handled personally — from first message to final handover — so your order is smooth,
              clear, and made exactly the way you need it.
            </p>
          </div>

          <div className="bg-cream-dark rounded-3xl p-8 shadow-sm">
            <h3
              className="font-playfair text-2xl font-bold text-brown mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Order Form
            </h3>

            {submitted ? (
              <div className="text-center py-8">
                <p className="text-brown font-semibold text-lg mb-2">Thank you! 🎂</p>
                <p className="text-brown-light">We&apos;ve received your order request and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-brown text-sm font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-dark bg-white text-brown text-sm focus:outline-none focus:ring-2 focus:ring-brown"
                  />
                </div>

                <div>
                  <label className="block text-brown text-sm font-semibold mb-1">Contact number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    placeholder="e.g. +44 7000 000000"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-dark bg-white text-brown text-sm focus:outline-none focus:ring-2 focus:ring-brown"
                  />
                </div>

                <div>
                  <label className="block text-brown text-sm font-semibold mb-1">Address / Postcode</label>
                  <input
                    type="text"
                    name="addressPostcode"
                    value={formData.addressPostcode}
                    onChange={handleChange}
                    required
                    placeholder="Delivery address and postcode"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-dark bg-white text-brown text-sm focus:outline-none focus:ring-2 focus:ring-brown"
                  />
                </div>

                <div>
                  <label className="block text-brown text-sm font-semibold mb-1">Notes / Requests / Info</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any details you want to share"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-dark bg-white text-brown text-sm focus:outline-none focus:ring-2 focus:ring-brown resize-none"
                  />
                  <p className="text-xs text-brown-light mt-2 leading-relaxed">
                    Please include any allergy information (e.g. nuts, dairy, eggs, gluten, soy) and dietary preferences
                    such as halal-friendly, vegan-friendly, or alcohol-free requests.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brown text-cream-light py-3 rounded-xl font-semibold text-sm tracking-wide hover:bg-maroon transition-all duration-300 mt-2"
                  style={{ fontFamily: "Lato, sans-serif" }}
                >
                  Submit Order
                </button>
              </form>
            )}

            <div className="mt-5 rounded-xl bg-white/70 border border-cream-dark px-4 py-3">
              <p className="text-xs text-brown-light leading-relaxed">
                <strong>Allergen notice:</strong> Our kitchen handles multiple allergens. We follow strict preparation
                practices, but cannot guarantee zero cross-contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
