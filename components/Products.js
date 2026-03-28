import Image from "next/image";

const popularCakes = [
  {
    src: "/images/cake-milk.jpg",
    name: "Milk Cakes",
    subtitle: "Classic | Customisable",
  },
  {
    src: "/images/cake-cheesecake.jpg",
    name: "Cheesecakes",
    subtitle: "Flavours Available",
  },
  {
    src: "/images/cake-crumble.jpg",
    name: "Italian Crumble Cakes",
    subtitle: "Ricotta | Hazelnut",
  },
  {
    src: "/images/cake-mimosa.jpg",
    name: "Italian Mimosa Cake",
    subtitle: "Classic",
  },
];

const pastries = [
  {
    src: "/images/pastry-tiramisu.jpg",
    name: "Authentic Tiramisù",
    subtitle: "Alcohol-Free",
  },
  {
    src: "/images/pastry-eclair.jpg",
    name: "Eclair Cake",
    subtitle: "Exclusive",
  },
  {
    src: "/images/pastry-cannoli.jpg",
    name: "Large Filled Cannoli",
    subtitle: "Freshly filled",
  },
  {
    src: "/images/pastry-croissant.jpg",
    name: "French Large Croissant",
    subtitle: "Filled & Topped",
  },
];

const classicBakes = [
  {
    src: "/images/bake-lemon-loaf.jpg",
    name: "Lemon Loaf",
    subtitle: "Customisable",
  },
  {
    src: "/images/bake-victoria.jpg",
    name: "Victoria Sponge",
    subtitle: "Classic",
  },
  {
    src: "/images/bake-sprinkle.jpg",
    name: "Sprinkle Pudding Cake",
    subtitle: "Classic",
  },
  {
    src: "/images/bake-brownies.jpg",
    name: "Brownies",
    subtitle: "Multiple flavours",
  },
];

function ProductCard({ src, name, subtitle }) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-3">
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <h4
        className="font-bold text-brown text-base"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {name}
      </h4>
      <p className="text-brown-light text-sm mt-0.5">{subtitle}</p>
    </div>
  );
}

function ProductSection({ title, subtitle, items }) {
  return (
    <div className="mb-16">
      <h3
        className="font-playfair text-2xl md:text-3xl font-bold text-brown mb-1"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {title}
      </h3>
      <p className="text-brown-light text-sm mb-8 italic">{subtitle}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-4">
          <h2
            className="font-playfair text-4xl md:text-5xl font-bold text-brown tracking-wide uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Products
          </h2>
          <p className="text-brown-light text-sm mt-2 mb-12">
            Availability may vary. Samples available upon enquiry.
          </p>
        </div>

        <ProductSection
          title="Popular Cakes Range"
          subtitle="High quality, organic and freshly homemade — hand-packed with love from our kitchen to yours"
          items={popularCakes}
        />

        <ProductSection
          title="Pastries & More"
          subtitle="Handcrafted & Luxury"
          items={pastries}
        />

        <ProductSection
          title="Classic Bakes"
          subtitle="Luscious and decadent"
          items={classicBakes}
        />
      </div>
    </section>
  );
}
