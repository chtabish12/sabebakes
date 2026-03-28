export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-rose-pale opacity-60" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-cream-dark opacity-80" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-caramel-light opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="z-10 animate-fade-in">
            <p className="section-subtitle">✦ Handcrafted with Love</p>
            <h1 className="section-title mb-6">
              Baked Fresh,{" "}
              <span className="text-caramel italic">Every Day</span>
            </h1>
            <p className="text-brown-light font-lato text-lg leading-relaxed mb-8 max-w-md">
              Artisan cakes, pastries, and breads crafted from the finest
              ingredients — bringing warmth and sweetness to every occasion.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="btn-primary">
                Explore Our Menu
              </a>
              <a href="#order" className="btn-outline">
                Custom Orders
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 flex-wrap">
              {[
                { number: "200+", label: "Happy Clients" },
                { number: "50+", label: "Menu Items" },
                { number: "5★", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair text-2xl font-bold text-caramel">
                    {stat.number}
                  </p>
                  <p className="font-lato text-xs text-brown-light tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image / Illustration */}
          <div className="relative z-10 flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              {/* Circle background */}
              <div className="absolute inset-0 rounded-full bg-rose-pale" />

              {/* Main cake illustration using CSS */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Cake stand */}
                  <div className="w-48 h-3 bg-caramel rounded-full mx-auto mt-4" />
                  <div className="w-8 h-10 bg-caramel-dark rounded-b-lg mx-auto" />

                  {/* Cake layers */}
                  <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 w-40 h-10 bg-caramel-light rounded-b-xl" />
                  <div className="absolute bottom-[95px] left-1/2 -translate-x-1/2 w-36 h-16 bg-cream-dark rounded-t-none" />
                  <div className="absolute bottom-[160px] left-1/2 -translate-x-1/2 w-28 h-14 bg-cream rounded-t-none" />
                  <div className="absolute bottom-[223px] left-1/2 -translate-x-1/2 w-20 h-12 bg-rose-pale rounded-t-lg" />

                  {/* Frosting drips */}
                  <div className="absolute bottom-[168px] left-1/2 -translate-x-1/2 w-32 h-3 bg-warm-white rounded-full" />
                  <div className="absolute bottom-[231px] left-1/2 -translate-x-1/2 w-24 h-3 bg-warm-white rounded-full" />

                  {/* Candles */}
                  <div className="absolute bottom-[262px] left-1/2 -translate-x-[60px] w-3 h-8 bg-rose rounded-t-full" />
                  <div className="absolute bottom-[262px] left-1/2 -translate-x-1/2 w-3 h-8 bg-gold rounded-t-full" />
                  <div className="absolute bottom-[262px] left-1/2 translate-x-[40px] w-3 h-8 bg-caramel rounded-t-full" />

                  {/* Flames */}
                  <div className="absolute bottom-[292px] left-1/2 -translate-x-[57px] w-2 h-3 bg-gold rounded-full animate-pulse" />
                  <div className="absolute bottom-[292px] left-1/2 -translate-x-[3px] w-2 h-3 bg-gold rounded-full animate-pulse" />
                  <div className="absolute bottom-[292px] left-1/2 translate-x-[43px] w-2 h-3 bg-gold rounded-full animate-pulse" />

                  {/* Decorative dots */}
                  <div className="absolute bottom-[100px] left-1/2 -translate-x-[60px] w-3 h-3 rounded-full bg-rose" />
                  <div className="absolute bottom-[100px] left-1/2 -translate-x-[30px] w-3 h-3 rounded-full bg-caramel" />
                  <div className="absolute bottom-[100px] left-1/2 translate-x-[10px] w-3 h-3 rounded-full bg-rose" />
                  <div className="absolute bottom-[100px] left-1/2 translate-x-[40px] w-3 h-3 rounded-full bg-caramel" />
                </div>
              </div>

              {/* Floating tags */}
              <div className="absolute top-6 -right-4 bg-white shadow-lg rounded-2xl px-4 py-2 text-center">
                <p className="text-xs font-lato text-brown-light">Fresh Today</p>
                <p className="text-sm font-playfair font-bold text-caramel">🍰 Pastries</p>
              </div>
              <div className="absolute bottom-10 -left-4 bg-white shadow-lg rounded-2xl px-4 py-2 text-center">
                <p className="text-xs font-lato text-brown-light">Best Seller</p>
                <p className="text-sm font-playfair font-bold text-caramel">🎂 Custom Cakes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-lato text-xs text-brown-light tracking-widest uppercase">
          Scroll
        </span>
        <svg className="w-5 h-5 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
