const features = [
  {
    icon: "🌾",
    title: "Local Ingredients",
    description:
      "We source our flour, dairy, and produce from trusted local farms to ensure freshness in every bite.",
  },
  {
    icon: "🫶",
    title: "Made with Love",
    description:
      "Every item is handcrafted with care and attention, as if we were baking for our own family.",
  },
  {
    icon: "🌱",
    title: "No Preservatives",
    description:
      "We believe real food doesn't need additives. Our bakes are always natural and preservative-free.",
  },
  {
    icon: "🎨",
    title: "Custom Creations",
    description:
      "Dream it, we bake it. From wedding cakes to birthday surprises, every custom order is one of a kind.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="relative order-2 lg:order-1">
            {/* Main card */}
            <div className="relative bg-caramel rounded-[2rem] p-10 text-white shadow-2xl overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-caramel-light opacity-30" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-caramel-dark opacity-40" />

              <div className="relative z-10">
                <p className="font-lato text-caramel-light text-sm font-semibold tracking-widest uppercase mb-2">
                  Our Story
                </p>
                <h3 className="font-playfair text-3xl font-bold mb-4 leading-tight">
                  A bakery born from passion
                </h3>
                <p className="font-lato text-cream/90 leading-relaxed">
                  Sabe Bakes started as a home kitchen experiment that quickly
                  grew into a beloved local bakery. Our founder Sabe has been
                  baking since she was eight years old, learning from her
                  grandmother&apos;s recipes and perfecting them with a modern
                  twist.
                </p>

                {/* Signature */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    👩‍🍳
                  </div>
                  <div>
                    <p className="font-playfair font-bold text-lg">Sabe</p>
                    <p className="font-lato text-sm text-caramel-light">
                      Founder & Head Baker
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-5 text-center">
              <p className="font-playfair text-3xl font-bold text-caramel">8+</p>
              <p className="font-lato text-xs text-brown-light tracking-wide">
                Years of Baking
              </p>
            </div>

            {/* Decorative badge */}
            <div className="absolute -top-4 -left-4 bg-rose-pale border-2 border-rose-light rounded-2xl p-4 shadow-lg">
              <p className="text-2xl">🏆</p>
              <p className="font-lato text-xs font-bold text-rose mt-1">
                Award Winner
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="section-subtitle">✦ Who We Are</p>
            <h2 className="section-title mb-6">
              Baking Joy Into{" "}
              <span className="text-caramel italic">Every Bite</span>
            </h2>
            <p className="text-brown-light font-lato text-base leading-relaxed mb-4">
              At Sabe Bakes, we believe that great food brings people together.
              Our bakery is a place where quality meets creativity — from classic
              sourdough loaves to elaborate celebration cakes, each item tells a
              story.
            </p>
            <p className="text-brown-light font-lato text-base leading-relaxed mb-10">
              We are proud to serve our community with fresh, wholesome bakes
              every single day, using time-honored recipes and locally sourced
              ingredients.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-cream-dark hover:border-caramel-light transition-colors"
                >
                  <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                  <div>
                    <h4 className="font-playfair font-bold text-brown text-base mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-lato text-xs text-brown-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
