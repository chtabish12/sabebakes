const menuItems = [
  {
    id: 1,
    name: "Classic Wedding Cake",
    category: "cakes",
    price: "From $120",
    description: "Elegant tiered cake with vanilla buttercream and fresh florals.",
    emoji: "🎂",
    badge: "Bestseller",
    badgeColor: "bg-rose text-white",
  },
  {
    id: 2,
    name: "Chocolate Ganache Cake",
    category: "cakes",
    price: "$65",
    description: "Rich dark chocolate layers with silky ganache frosting.",
    emoji: "🍫",
    badge: null,
    badgeColor: "",
  },
  {
    id: 3,
    name: "Strawberry Shortcake",
    category: "cakes",
    price: "$55",
    description: "Light sponge with fresh strawberries and whipped cream.",
    emoji: "🍓",
    badge: "Seasonal",
    badgeColor: "bg-gold text-white",
  },
  {
    id: 4,
    name: "Butter Croissant",
    category: "pastries",
    price: "$4.50",
    description: "Flaky, golden layers of pure buttery perfection.",
    emoji: "🥐",
    badge: "Daily Fresh",
    badgeColor: "bg-caramel text-white",
  },
  {
    id: 5,
    name: "Cinnamon Danish",
    category: "pastries",
    price: "$5",
    description: "Swirled with cinnamon sugar and glazed with cream cheese icing.",
    emoji: "🌀",
    badge: null,
    badgeColor: "",
  },
  {
    id: 6,
    name: "Almond Tart",
    category: "pastries",
    price: "$6",
    description: "Crispy tart shell filled with frangipane and toasted almonds.",
    emoji: "🥧",
    badge: null,
    badgeColor: "",
  },
  {
    id: 7,
    name: "Sourdough Loaf",
    category: "breads",
    price: "$9",
    description: "Artisan sourdough with a perfect crust and chewy interior.",
    emoji: "🍞",
    badge: "Artisan",
    badgeColor: "bg-brown text-white",
  },
  {
    id: 8,
    name: "Rosemary Focaccia",
    category: "breads",
    price: "$8",
    description: "Soft focaccia topped with olive oil, rosemary, and sea salt.",
    emoji: "🌿",
    badge: null,
    badgeColor: "",
  },
  {
    id: 9,
    name: "Double Choco Cookies",
    category: "cookies",
    price: "$3 each",
    description: "Chewy cookies loaded with dark and white chocolate chips.",
    emoji: "🍪",
    badge: "Fan Fav",
    badgeColor: "bg-rose text-white",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subtitle">✦ Our Menu</p>
          <h2 className="section-title">
            Made With the{" "}
            <span className="text-caramel italic">Finest Ingredients</span>
          </h2>
          <p className="mt-4 text-brown-light font-lato max-w-xl mx-auto text-base leading-relaxed">
            Each item is baked fresh daily using traditional recipes and
            high-quality local ingredients.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl 
                         transition-all duration-300 border border-cream-dark hover:border-caramel-light
                         transform hover:-translate-y-1"
            >
              {/* Card top - emoji illustration */}
              <div className="relative bg-cream h-44 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                {item.badge && (
                  <span
                    className={`absolute top-3 right-3 text-xs font-lato font-bold px-3 py-1 rounded-full ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Card content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-playfair text-lg font-bold text-brown leading-snug">
                    {item.name}
                  </h3>
                  <span className="font-lato font-bold text-caramel text-sm whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="font-lato text-sm text-brown-light leading-relaxed">
                  {item.description}
                </p>
                <a
                  href="#order"
                  className="mt-4 inline-flex items-center gap-1 text-caramel font-lato font-semibold text-sm 
                             hover:gap-2 transition-all group/btn"
                >
                  Order Now
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <a href="#order" className="btn-outline">
            View Full Menu & Custom Orders
          </a>
        </div>
      </div>
    </section>
  );
}
