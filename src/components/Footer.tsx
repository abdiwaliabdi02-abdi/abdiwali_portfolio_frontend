export default function Footer() {
  return (
    <footer className="w-full mt-10">
      <div
        className="
          w-full text-center py-1 text-sm text-white
          bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700
          shadow-inner
        "
      >
        © {new Date().getFullYear()} Abdiwali Mohamed Abdi. All rights reserved.
      </div>
    </footer>
  );
}
