import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";

export default function App() {
  return (
    <div className="min-h-screen animated-bg relative overflow-hidden text-white">
      {/* Background Effects */}
      <div className="particles"></div>
      <div className="line"></div>

      {/* Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow px-4 md:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <ProfilePage />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
