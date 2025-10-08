import pricing from "@/data/pricing.json";
export default function BookingPage() {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-bold">Seat Booking</h1>
      <div className="card">
        <div className="font-semibold mb-2">Pricing</div>
        <ul className="grid md:grid-cols-2 gap-2 text-sm">
          <li>PC: ₹{pricing.PC_per_hour}/hour</li>
          <li>PS4: ₹{pricing.PS4_per_controller_per_hour}/hour per controller</li>
          <li>PS5: ₹{pricing.PS5_per_controller_per_hour}/hour per controller</li>
          <li>Xbox: ₹{pricing.Xbox_per_controller_per_hour}/hour per controller</li>
          <li>Racing Wheel: ₹{pricing.Racing_wheel_simulator_per_hour}/hour</li>
        </ul>
      </div>
      <div className="card">
        <div className="font-semibold mb-2">Quick Enquiry (chat/phone)</div>
        <p>WhatsApp/Call <b>8588961662</b> to reserve your slot now. Online booking with payments will be added in the next phases.</p>
      </div>
    </div>
  );
}
