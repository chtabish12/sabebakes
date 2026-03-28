import "./globals.css";

export const metadata = {
  title: "Sabe Bakes | Artisan Bakery",
  description:
    "Handcrafted cakes, pastries, and breads made with love. Order your custom cake or treat yourself to our daily fresh bakes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
