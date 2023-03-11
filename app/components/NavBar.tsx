import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <nav className="bg-white p-2 flex justify-between mx-10">
        <Link href="/" className="font-bold text-gray-700 text-2xl">
          OpenTable
        </Link>
        <div>
          <div className="flex items-center">
            <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
              Sign in
            </button>
            <button className="border p-1 px-4 rounded">Sign up</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
