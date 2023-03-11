import Header from "./component/Header";
import RestaurantCard from "./component/RestaurantCard";
import Sidebar from "./component/Sidebar";

export default function page() {
  return (
    <section className="bg-gray-100 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <Sidebar />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </div>
    </section>
  );
}
