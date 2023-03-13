import Header from "./components/Header";

export const metadata = {
  title: "OpenTable - Details",
  description: "Open table menu and other details",
};

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
