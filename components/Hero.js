import Image from "next/image";

const features = [
  {
    title: "Wholesale",
    desc: "Supplying cafés & businesses with consistent quality",
  },
  {
    title: "Delivery",
    desc: "Midlands area coverage — reliable & timely",
  },
  {
    title: "Made to Order",
    desc: "Made & packed with love from our kitchen to yours",
  },
];

const featureImages = [
  { src: "/images/feature-cheesecake.jpg", alt: "Cheesecake" },
  { src: "/images/feature-oreo-cake.jpg", alt: "Oreo Cake" },
  { src: "/images/feature-strawberry-cheese.jpg", alt: "Strawberry Cheesecake" },
];

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="bg-cream pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: White card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
              <h1
                className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-brown leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Wholesale.<br />
                Freshly Made.<br />
                Handcrafted.
              </h1>
              <p className="text-brown-light text-base leading-relaxed mb-4">
                We are a wholesale Italian homemade bakery based in the Midlands, supplying cafés, restaurants, and businesses with freshly handcrafted products.
              </p>
              <p className="text-brown-light text-base leading-relaxed mb-8">
                Every item is produced in small batches — from authentic tiramisù and cannoli to seasonal cakes — ensuring the highest quality, consistency, and freshness for your customers.
              </p>
              <a
                href="#order"
                className="inline-block bg-brown text-cream-light px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-maroon transition-all duration-300 shadow-md"
                style={{ fontFamily: "Lato, sans-serif" }}
              >
                Get in Touch
              </a>
            </div>

            {/* Right: Blob images */}
            <div className="relative h-[420px] md:h-[480px]">
              {/* Coffee bean dots */}
              <div className="absolute top-8 left-1/2 w-3 h-5 rounded-full bg-brown opacity-40 rotate-45" />
              <div className="absolute top-20 right-8 w-2 h-4 rounded-full bg-brown opacity-30 -rotate-12" />
              <div className="absolute bottom-24 left-4 w-3 h-5 rounded-full bg-brown opacity-35 rotate-12" />
              <div className="absolute top-1/2 right-4 w-2 h-4 rounded-full bg-brown opacity-25" />
              <div className="absolute bottom-8 right-1/3 w-3 h-5 rounded-full bg-brown opacity-40 -rotate-45" />

              {/* Top left blob */}
              <div className="absolute top-0 left-0 w-[48%] h-[48%]">
                <div className="w-full h-full rounded-[60%_40%_50%_60%/50%_60%_40%_50%] overflow-hidden bg-rose shadow-lg">
                  <Image
                    src="/images/blob-cannoli.jpg"
                    alt="Fresh Cannoli"
                    fill
                    sizes="(max-width: 768px) 45vw, 22vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Top right blob */}
              <div className="absolute top-4 right-0 w-[46%] h-[45%]">
                <div className="w-full h-full rounded-[50%_60%_40%_55%/60%_45%_55%_40%] overflow-hidden bg-rose-light shadow-lg">
                  <Image
                    src="/images/blob-pastry.jpg"
                    alt="Croissant"
                    fill
                    sizes="(max-width: 768px) 43vw, 21vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom left blob */}
              <div className="absolute bottom-0 left-8 w-[45%] h-[46%]">
                <div className="w-full h-full rounded-[45%_55%_60%_40%/55%_40%_60%_45%] overflow-hidden bg-rose shadow-lg">
                  <Image
                    src="/images/blob-cream-puff.jpg"
                    alt="Cream Puff"
                    fill
                    sizes="(max-width: 768px) 42vw, 21vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom right blob */}
              <div className="absolute bottom-4 right-0 w-[47%] h-[47%]">
                <div className="w-full h-full rounded-[55%_45%_40%_60%/40%_60%_50%_50%] overflow-hidden bg-rose-light shadow-lg">
                  <Image
                    src="/images/blob-tiramisu.jpg"
                    alt="Tiramisu"
                    fill
                    sizes="(max-width: 768px) 44vw, 22vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="bg-cream py-16 border-t border-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top row: heading + description */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2
                className="font-playfair text-3xl md:text-4xl font-bold text-brown leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Artisan Touch /<br />
                <span className="italic">Authentic Flavours</span>
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-brown-light text-base leading-relaxed">
                Produced in small batches to ensure consistency, quality and freshness for professional use. Each item is crafted with care using traditional Italian recipes.
              </p>
            </div>
          </div>

          {/* 3 Feature columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {features.map((f) => (
              <div key={f.title} className="border-t-2 border-brown pt-4">
                <h3
                  className="font-playfair text-xl font-bold text-brown mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-brown-light text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* 3 Feature photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureImages.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
