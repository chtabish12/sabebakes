import "./globals.css";

export const metadata = {
  title: "SABÉ | Homemade Bakery & Pasticceria",
  description:
    "SABÉ is a wholesale Italian homemade bakery based in the Midlands, UK. Supplying cafés and businesses with freshly handcrafted cakes, pastries, cannoli, tiramisù, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
