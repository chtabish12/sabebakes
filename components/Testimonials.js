const testimonials = [
  {
    id: 1,
    name: "Amara Johnson",
    role: "Bride",
    rating: 5,
    text: "Sabe Bakes made our wedding cake a true masterpiece. It was absolutely stunning and tasted even better than it looked. Every guest was asking where we ordered it from!",
    avatar: "AJ",
    color: "bg-rose text-white",
  },
  {
    id: 2,
    name: "Marcus Lee",
    role: "Regular Customer",
    rating: 5,
    text: "I come here every Saturday morning for the sourdough and croissants. Nothing beats the smell of fresh bread — this bakery has ruined supermarket bread for me forever.",
    avatar: "ML",
    color: "bg-caramel text-white",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Birthday Order",
    rating: 5,
    text: "Ordered a custom chocolate cake for my daughter's 5th birthday. Sabe nailed every detail perfectly. The design was exactly what I envisioned and it was delicious!",
    avatar: "PS",
    color: "bg-brown text-white",
  },
  {
    id: 4,
    name: "Daniel Torres",
    role: "Corporate Client",
    rating: 5,
    text: "We order from Sabe Bakes for all our office events. The pastry boxes are always a hit. Great quality, professional service, and on-time delivery every time.",
    avatar: "DT",
    color: "bg-gold text-white",
  },
  {
    id: 5,
    name: "Fatima Al-Rashid",
    role: "Baby Shower",
    rating: 5,
    text: "The baby shower cake was beyond beautiful. Sabe took my rough sketch and turned it into something magical. I was moved to tears when I saw it!",
    avatar: "FA",
    color: "bg-rose text-white",
  },
  {
    id: 6,
    name: "Thomas Wright",
    role: "Food Blogger",
    rating: 5,
    text: "As a food blogger, I have high standards. Sabe Bakes exceeded them all — the almond tarts are out of this world. Authentic flavours, beautiful presentation.",
    avatar: "TW",
    color: "bg-caramel text-white",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subtitle">✦ Happy Customers</p>
          <h2 className="section-title">
            What Our{" "}
            <span className="text-caramel italic">Customers Say</span>
          </h2>
          <p className="mt-4 text-brown-light font-lato max-w-xl mx-auto text-base">
            Don&apos;t just take our word for it — here&apos;s what our
            community has to say about Sabe Bakes.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 border border-cream-dark hover:border-caramel-light 
                         shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <StarRating count={t.rating} />
              <p className="mt-4 font-lato text-brown-light text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${t.color}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-playfair font-bold text-brown text-sm">
                    {t.name}
                  </p>
                  <p className="font-lato text-xs text-caramel">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 bg-cream rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "⭐", value: "5.0", label: "Average Rating" },
            { icon: "💬", value: "200+", label: "Reviews" },
            { icon: "🎂", value: "500+", label: "Cakes Made" },
            { icon: "🔁", value: "95%", label: "Repeat Customers" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl mb-1">{item.icon}</p>
              <p className="font-playfair text-2xl font-bold text-caramel">
                {item.value}
              </p>
              <p className="font-lato text-xs text-brown-light tracking-wide uppercase mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
