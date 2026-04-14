import Image from "next/image";

export default function BottomBanner() {
  return (
    <section className="relative overflow-hidden bg-brown py-16 md:py-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/bottom-banner.jpeg"
          alt="Freshly baked goods"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brown/75" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-caramel to-transparent z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Sparkle icon */}
        <p className="font-lato text-caramel-light text-sm font-semibold tracking-widest uppercase mb-4">
          ✦ Let&apos;s Bake Together
        </p>

        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5">
          Your Dream Cake is{" "}
          <span className="text-caramel italic">One Click Away</span>
        </h2>

        <p className="font-lato text-cream/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          From elegant wedding cakes to playful birthday treats — we pour our
          heart into every single bake. Order now and let us bring sweetness
          to your next celebration.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#order"
            className="bg-caramel text-white px-8 py-3.5 rounded-full font-lato font-semibold text-sm
                       tracking-wide hover:bg-caramel-dark transition-all duration-300 shadow-lg
                       hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Place an Order
          </a>
          <a
            href="tel:+15551234567"
            className="border-2 border-cream/30 text-cream px-8 py-3.5 rounded-full font-lato font-semibold
                       text-sm tracking-wide hover:border-caramel hover:text-caramel transition-all duration-300"
          >
            📞 Call Us
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { icon: "🎂", text: "Custom Cakes" },
            { icon: "🚚", text: "Delivery Available on Request" },
            { icon: "⭐", text: "5-Star Rated" },
            { icon: "🌿", text: "Halal & Vegan Friendly" },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2">
              <span className="text-xl">{badge.icon}</span>
              <span className="font-lato text-sm text-cream/60 font-semibold tracking-wide">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-caramel to-transparent" />
    </section>
  );
}
