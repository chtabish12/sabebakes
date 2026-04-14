import Image from "next/image";

export default function OrderReminders() {
  return (
    <section id="about" className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-playfair text-4xl md:text-5xl font-bold text-brown mb-10 uppercase"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          About Us
        </h2>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-brown text-2xl md:text-3xl leading-relaxed text-center">
              At our homemade bakery, every treat is crafted by hand with the warmth only a home kitchen can provide. Our
              head baker uses years of experience to master authentic Italian pastries, buttery French classics, and timeless
              English bakes.
            </p>
            <p className="text-brown text-2xl md:text-3xl leading-relaxed text-center mt-10">
              We believe everyone deserves a seat at our table. We gladly tailor our homemade recipes to be gluten-free,
              <strong> halal, vegan</strong>, or alcohol-free, and we take expert care with specific allergens. Whatever your
              needs, we adapt our craft to ensure you enjoy a perfect treat without compromising on that genuine,
              from-scratch taste.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-cream-dark/40">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-brown mb-4 uppercase">
              Allergy &amp; Dietary Information
            </h3>
            <p className="text-brown-light text-lg leading-relaxed">
              Our kitchen handles common allergens including gluten (wheat), milk, eggs, soy, peanuts and tree nuts.
              While we take every precaution to prevent cross-contact, we cannot guarantee an allergen-free environment.
            </p>
            <p className="text-brown-light text-lg leading-relaxed mt-4">
              Please share all allergy and dietary requirements when ordering. We offer halal-friendly, vegan-friendly,
              alcohol-free and custom options wherever possible.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row items-stretch gap-4">
            <div className="relative w-full md:w-1/2 h-56 md:h-auto rounded-xl overflow-hidden min-h-[220px]">
              <Image
                src="/assets/reminder-tart.jpg"
                alt="Bakery product example"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center p-2 md:p-4">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-brown mb-3 uppercase">
                Product List &amp; Prices
              </h3>
              <p className="text-brown-light text-lg leading-relaxed">
                We use premium ingredients to deliver top-tier bakes at the best prices around. Many of our most popular
                items are delivered fresh every morning for as little as less than £2 per unit.
              </p>
              <p className="text-brown-light text-lg leading-relaxed mt-6">
                Since our homemade menu is always evolving, send us a query for our full product list and pricing.
                Let&apos;s bake something incredible for you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
