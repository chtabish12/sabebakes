import Image from "next/image";

const reminders = [
  {
    src: "/assets/reminder-croissants.jpg",
    text: "We bake every morning in small batches. For same-day cravings, give us a quick call!",
  },
  {
    src: "/assets/reminder-tart.jpg",
    boldText: "Order Window",
    text: "Orders placed after 4 PM roll over to the next morning's bake. Still oven-fresh, never frozen.",
  },
  {
    src: "/assets/reminder-macaron.jpg",
    boldText: "Pickup & Delivery Hours",
    text: "9 AM – 5 PM, Monday to Saturday. Sundays are for rest...",
  },
  {
    src: "/assets/reminder-nuts.jpg",
    text: "Planning a celebration? Place your order 24–48 hours ahead to guarantee availability and freshness.",
  },
];

export default function OrderReminders() {
  return (
    <section id="order-reminders" className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-playfair text-4xl md:text-5xl font-bold text-brown mb-10"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Order Reminders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reminders.map((reminder, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm flex flex-row items-stretch gap-0"
            >
              <div className="relative w-1/2 h-40 rounded-xl overflow-hidden">
                <Image
                  src={reminder.src}
                  alt="Order reminder"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 w-1/2 flex flex-col justify-center p-4">
                {reminder.boldText && (
                  <span className="font-bold text-brown text-sm block mb-1">
                    {reminder.boldText}
                  </span>
                )}
                <p className="text-brown-light text-sm leading-relaxed">{reminder.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
