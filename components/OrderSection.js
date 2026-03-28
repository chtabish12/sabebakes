"use client";

import { useState } from "react";

const orderTypes = [
  { id: "custom-cake", label: "Custom Cake" },
  { id: "pastry-box", label: "Pastry Box" },
  { id: "bread", label: "Bread Order" },
  { id: "cookies", label: "Cookie Pack" },
  { id: "other", label: "Other" },
];

export default function OrderSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    date: "",
    message: "",
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
    <section id="order" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-rose-pale opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-cream-dark opacity-60 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info side */}
          <div>
            <p className="section-subtitle">✦ Place Your Order</p>
            <h2 className="section-title mb-6">
              Let&apos;s Bake Something{" "}
              <span className="text-caramel italic">Special</span>
            </h2>
            <p className="text-brown-light font-lato text-base leading-relaxed mb-8">
              Whether it&apos;s a custom wedding cake, a birthday surprise, or
              your weekly bread order — we&apos;d love to hear from you. Fill in
              the form and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "📍",
                  title: "Visit Us",
                  detail: "12 Baker Street, Sweet Town, CA 90210",
                },
                {
                  icon: "📞",
                  title: "Call Us",
                  detail: "+1 (555) 123-4567",
                },
                {
                  icon: "📧",
                  title: "Email Us",
                  detail: "hello@sabebakes.com",
                },
                {
                  icon: "🕐",
                  title: "Opening Hours",
                  detail: "Mon–Sat: 7am – 7pm  |  Sun: 8am – 4pm",
                },
              ].map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">
                    {info.icon}
                  </span>
                  <div>
                    <p className="font-playfair font-bold text-brown text-sm">
                      {info.title}
                    </p>
                    <p className="font-lato text-sm text-brown-light">
                      {info.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-4">
              {[
                { label: "Instagram", icon: "📷" },
                { label: "Facebook", icon: "📘" },
                { label: "WhatsApp", icon: "💬" },
              ].map((social) => (
                <button
                  key={social.label}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-cream-dark 
                             hover:border-caramel hover:bg-caramel hover:text-white transition-all text-sm font-lato font-semibold text-brown"
                >
                  <span>{social.icon}</span>
                  {social.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-cream-dark">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-playfair text-2xl font-bold text-brown mb-2">
                  Order Received!
                </h3>
                <p className="font-lato text-brown-light text-sm">
                  Thank you, {formData.name}! We&apos;ll be in touch within 24
                  hours to confirm your order details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-outline"
                >
                  Place Another Order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-playfair text-xl font-bold text-brown mb-1">
                  Order Request Form
                </h3>
                <p className="font-lato text-xs text-brown-light mb-4">
                  Fill out the form below and we&apos;ll contact you to confirm.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-lato text-xs font-semibold text-brown mb-1 uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 
                                 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel 
                                 font-lato text-sm text-brown placeholder-brown-light/50 transition"
                    />
                  </div>
                  <div>
                    <label className="block font-lato text-xs font-semibold text-brown mb-1 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 
                                 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel 
                                 font-lato text-sm text-brown placeholder-brown-light/50 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-lato text-xs font-semibold text-brown mb-1 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 
                               focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel 
                               font-lato text-sm text-brown placeholder-brown-light/50 transition"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-lato text-xs font-semibold text-brown mb-1 uppercase tracking-wide">
                      Order Type *
                    </label>
                    <select
                      name="orderType"
                      value={formData.orderType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 
                                 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel 
                                 font-lato text-sm text-brown transition appearance-none cursor-pointer"
                    >
                      <option value="">Select type...</option>
                      {orderTypes.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-lato text-xs font-semibold text-brown mb-1 uppercase tracking-wide">
                      Required Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 
                                 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel 
                                 font-lato text-sm text-brown transition cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-lato text-xs font-semibold text-brown mb-1 uppercase tracking-wide">
                    Order Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your order — flavour, size, design ideas, quantity..."
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 
                               focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel 
                               font-lato text-sm text-brown placeholder-brown-light/50 transition resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-center">
                  Submit Order Request
                </button>

                <p className="text-center font-lato text-xs text-brown-light">
                  We respond within 24 hours. Custom orders require 3+ days
                  notice.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
