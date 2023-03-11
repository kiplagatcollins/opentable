import Header from "./components/Header";
import ReservationForm from "./components/ReservationForm";

export default function page() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            {/* FORM */}
            <ReservationForm />
          </div>
        </div>
      </div>
    </main>
  );
}
