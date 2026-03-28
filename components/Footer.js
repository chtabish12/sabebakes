export default function Footer() {
  return (
    <footer className="bg-brown text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold text-cream-light mb-2"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              SABÉ
            </h3>
            <p className="text-cream-dark text-sm leading-relaxed">
              Homemade Bakery &amp; Pasticceria<br />
              Wholesale Italian bakes, handcrafted with love.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-cream-light mb-3 uppercase tracking-wider text-xs"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Contact
            </h4>
            <p className="text-cream-dark text-sm leading-loose">
              Based in the Midlands, UK<br />
              Wholesale enquiries welcome<br />
              <a href="mailto:hello@sabebakes.co.uk" className="hover:text-rose transition-colors">
                hello@sabebakes.co.uk
              </a>
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="font-semibold text-cream-light mb-3 uppercase tracking-wider text-xs"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Hours
            </h4>
            <p className="text-cream-dark text-sm leading-loose">
              Monday – Saturday: 9 AM – 5 PM<br />
              Sunday: Closed<br />
              Orders: 24–48 hrs advance notice
            </p>
          </div>
        </div>

        <div className="border-t border-brown-medium pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-cream-dark text-xs">
            © {new Date().getFullYear()} SABÉ Homemade Bakery &amp; Pasticceria. All rights reserved.
          </p>
          <p className="text-cream-dark text-xs">Est. 2025 · Midlands, UK</p>
        </div>
      </div>
    </footer>
  );
}
