"use client";

import { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    email: "",
    product1: "",
    product2: "",
    quantity: "",
    details: "",
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
          {/* Left: heading */}
          <div>
            <h2
              className="font-playfair text-4xl md:text-5xl font-bold text-brown mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready to order?
            </h2>
            <p className="text-brown-light text-base leading-relaxed">
              Just fill in your cravings! Tell us what you want, how much you need, and when you&apos;d like it. We&apos;ll get back to you to confirm availability and arrange delivery.
            </p>
            <p className="text-brown-light text-base leading-relaxed mt-4">
              We supply cafés, restaurants, delis, and businesses across the Midlands. Minimum order quantities apply — get in touch for wholesale pricing.
            </p>
          </div>

          {/* Right: form card */}
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
                  <label className="block text-brown text-sm font-semibold mb-1">Email address</label>
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
                  <label className="block text-brown text-sm font-semibold mb-1">Your order</label>
                  <input
                    type="text"
                    name="product1"
                    value={formData.product1}
                    onChange={handleChange}
                    placeholder="Product 1 (e.g. Tiramisù)"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-dark bg-white text-brown text-sm focus:outline-none focus:ring-2 focus:ring-brown mb-2"
                  />
                  <input
                    type="text"
                    name="product2"
                    value={formData.product2}
                    onChange={handleChange}
                    placeholder="Product 2 (optional)"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-dark bg-white text-brown text-sm focus:outline-none focus:ring-2 focus:ring-brown"
                  />
                </div>

                <div>
                  <label className="block text-brown text-sm font-semibold mb-1">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 12 cannoli, 2 whole cheesecakes"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-dark bg-white text-brown text-sm focus:outline-none focus:ring-2 focus:ring-brown"
                  />
                </div>

                <div>
                  <label className="block text-brown text-sm font-semibold mb-1">
                    Delivery address &amp; special requests
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Address, delivery date, allergies, customisation requests..."
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-dark bg-white text-brown text-sm focus:outline-none focus:ring-2 focus:ring-brown resize-none"
                  />
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
          </div>
        </div>
      </div>
    </section>
  );
}
