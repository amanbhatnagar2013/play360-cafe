export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#1f1f1f]">
      <div className="container py-8 text-sm grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold text-accent mb-2">Play 360 Esports Café</div>
          <div>32-A, Shakti Khand 2, Ground Floor, Indirapuram, Ghaziabad</div>
          <div>☎ 8588961662</div>
          <div>Hours: 12:30 PM – 9:15 PM</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1">
            <li><a href="/booking">Seat Booking</a></li>
            <li><a href="/platforms/playstation">PlayStation</a></li>
            <li><a href="/platforms/xbox">Xbox</a></li>
            <li><a href="/platforms/pc">PC Games</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <div>Email: amanbhatnagar2013@gmail.com</div>
          <div>WhatsApp: 8588961662</div>
        </div>
      </div>
      <div className="text-center text-xs py-4 opacity-70">© {new Date().getFullYear()} Play 360 Esports Café</div>
    </footer>
  );
}
