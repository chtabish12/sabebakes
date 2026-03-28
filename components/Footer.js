import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-brown text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Sabe Bakes Logo"
                width={160}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="font-lato text-sm text-cream/70 leading-relaxed max-w-xs">
              Handcrafted bakes made with love and the finest local ingredients.
              Bringing sweetness to every occasion since 2016.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Instagram", icon: "📷" },
                { label: "Facebook", icon: "📘" },
                { label: "WhatsApp", icon: "💬" },
                { label: "Pinterest", icon: "📌" },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center 
                             text-base hover:bg-caramel hover:border-caramel transition-all"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Menu", href: "#menu" },
                { label: "About Us", href: "#about" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Order Now", href: "#order" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-lato text-sm text-cream/70 hover:text-caramel transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-bold text-base mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-base flex-shrink-0 mt-0.5">📍</span>
                <span className="font-lato text-sm text-cream/70">
                  12 Baker Street, Sweet Town, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base">📞</span>
                <a
                  href="tel:+15551234567"
                  className="font-lato text-sm text-cream/70 hover:text-caramel transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base">📧</span>
                <a
                  href="mailto:hello@sabebakes.com"
                  className="font-lato text-sm text-cream/70 hover:text-caramel transition-colors"
                >
                  hello@sabebakes.com
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="font-lato text-xs font-semibold text-caramel mb-1 uppercase tracking-wide">
                Opening Hours
              </p>
              <p className="font-lato text-xs text-cream/70">
                Mon–Sat: 7:00am – 7:00pm
              </p>
              <p className="font-lato text-xs text-cream/70">
                Sunday: 8:00am – 4:00pm
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-lato text-xs text-cream/50 text-center">
            © {year} Sabe Bakes. All rights reserved.
          </p>
          <p className="font-lato text-xs text-cream/50 flex items-center gap-1">
            Baked with <span className="text-rose text-sm">♥</span> for you
          </p>
        </div>
      </div>
    </footer>
  );
}
